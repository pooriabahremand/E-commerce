import { createContext, useState, useEffect } from "react";
import { productData } from "../Shop-data";

export const ProductContext = createContext({
  products: null,
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
