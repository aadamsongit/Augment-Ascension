import React from "react";

type Category = {
  id: number;
  name: string;
  imageUrl: string;
};

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { id, name, imageUrl } = category;
  return (
    <div className="group category-item relative min-w-[30%] flex-[1_1_auto] h-[240px] flex items-center justify-center border overflow-hidden m-[0_7.5px_15px] hover:cursor-pointer">
      <div
        className="background-image w-full h-full bg-cover bg-center transform transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-cta-container absolute h-[90px] px-[25px] flex flex-col items-center justify-center border bg-white opacity-70 group-hover:opacity-90">
        <h2 className="font-bold text-[22px] text-[#4a4a4a] mx-[6px]">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CategoryItem;
