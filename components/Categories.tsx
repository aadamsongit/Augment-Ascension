import React from "react";

const Categories: React.FC = () => {
  const categories = [
    { id: 1, name: "Cybernetics", imageUrl: "/cybernetics.jpg" },
    { id: 2, name: "Streetwear", imageUrl: "/streetwear.jpg" },
    { id: 3, name: "Smart Glasses", imageUrl: "/smart-glasses.jpg" },
    { id: 4, name: "Neurotech", imageUrl: "/neurotech.jpg" },
    { id: 5, name: "Energy Cores", imageUrl: "/energy-cores.jpg" },
  ];

  return (
    <div className="categories-container w-full flex flex-wrap justify-between">
      {categories.map(({ id, name, imageUrl }) => (
        <div
          key={id}
          className="category-item relative min-w-[30%] flex-[1_1_auto] h-[240px] flex items-center justify-center border overflow-hidden m-[0_7.5px_15px] hover:cursor-pointer"
        >
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
      ))}
      ;
    </div>
  );
};

export default Categories;
