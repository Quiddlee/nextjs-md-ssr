import parseMetadata from './postMetadataHelpers';
import processFiles from './processFiles';
import { POSTS_FOLDER } from '../constants/webSiteVars';

export async function getAllPostsData() {
  return await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { content: matterResult.content, ...postMetadata };
  });
}

export const getPostData = async (slug: string) => {
  const matchingPosts = await processFiles(POSTS_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    if (postMetadata.slug === slug) {
      return { content: matterResult.content, postMetadata };
    } else {
      return { content: 'content', slug: 'wrong post' };
    }
  });

  const filteredPosts = matchingPosts.filter((post) => post.slug !== 'wrong post');

  if (filteredPosts.length) {
    return filteredPosts[0];
  }

  throw new Error(`Post with slug "${slug}" not found.`);
};
