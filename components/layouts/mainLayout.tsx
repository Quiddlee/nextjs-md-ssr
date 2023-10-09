import Head from 'next/head';
import React from 'react';

import Logo from '../logo/logo';
import SearchInput from '../searchInput/searchInput';
import SeoScripts from '../seo/seoScripts';

type propsType = {
  children: React.ReactElement;
};

const MainLayout = ({ children }: propsType) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full relative 2xl:container mx-auto">
        <Logo />
        <SearchInput />
      </header>
      <section className="w-full 2xl:container mx-auto">
        {children}
        <SeoScripts />
      </section>
    </>
  );
};

export default MainLayout;
