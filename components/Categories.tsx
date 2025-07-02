import React from "react";

const Categories: React.FC = () => {
  const categories = [
    { id: 1, name: "Cybernetics" },
    { id: 2, name: "Streetwear" },
    { id: 3, name: "Smart Glasses" },
    { id: 4, name: "Smartphones" },
  ];

  return (
    <div className="categories-container w-full flex flex-wrap justify-between">
      {categories.map(({ id, name }) => (
        <div
          key={id}
          className="category-item relative min-w-[30%] h-[240px] flex items-center justify-center border overflow-hidden m-[0_7.5px_15px]"
        >
          <div className="background-image w-full h-full bg-cover bg-center transform transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110" />
          <div className="category-body-container absolute h-[90px] px-[25px] flex flex-col items-center justify-center border bg-white opacity-70 group-hover:opacity-90">
            <h2 className="font-bold text-[22px] text-[#4a4a4a] mx-[6px]">
              {name}
            </h2>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Categories;
