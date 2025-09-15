import { Button } from "@/components/ui/button";
import React from "react";

type Product = {
  id: string | number;
  name: string;
  price: number | string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price } = product;
  return (
    <div className="w-full flex flex-col items-center h-[350px] relative">
      <div key={id} className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button></Button>
    </div>
  );
};

export default ProductCard;
