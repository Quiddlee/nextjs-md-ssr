import Image from 'next/image';

import { IRecipe } from '../../../context/RecipeProvider';
import cookingIcon from '../../../public/assets/icons/Cooking_time.svg';

type propsType = {
  recipe: IRecipe;
};

export default function RecipeCard(props: propsType) {
  const { image, title, category, time, calories } = props.recipe;

  return (
    <div className="max-h-[290px] cursor-pointer object-contain transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:w-[220px]">
      <div className="relative z-10">
        <Image
          width="220"
          height="116"
          src={image}
          alt={title}
          className="recipeImg rounded-t-[20px]"
        />
        <div className="absolute bottom-[30px] left-[16px] flex gap-1 rounded-lg bg-primary-50 px-2 text-[10px] font-[500]">
          <Image src={cookingIcon} alt="" />
          {time} min
        </div>
      </div>
      <div className="relative z-20 translate-y-[-20px] rounded-b-[20px] bg-primary-50 px-4 py-5 shadow-[0px_4px_13px_0px_rgba(0,_0,_0,_0.05)]">
        <h4 className="truncate text-base font-[600]">{title}</h4>
        <div className="mt-[33px] flex justify-between text-[12px] font-[500] text-primary-600">
          <p>{category}</p>
          <p>
            <span className="font-[700]">{calories}</span> calories
          </p>
        </div>
      </div>
    </div>
  );
}
