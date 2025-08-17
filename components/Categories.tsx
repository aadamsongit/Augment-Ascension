"use client";

import React from "react";
import CategoryItem from "./CategoryItem";

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
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      ;
    </div>
  );
};

export default Categories;
