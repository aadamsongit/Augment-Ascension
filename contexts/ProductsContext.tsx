import { createContext } from 'react';
import shopData from "@/data/shopData.json";
import { useContext } from "react";

export const ProductsContext = createContext(shopData);
ProductsContext.displayName = "ProductsContext"; 
// This context can be used to provide product data throughout the app

export const ProductsProvider = ProductsContext.Provider;
export const useProducts = () => useContext(ProductsContext);

