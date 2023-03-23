import { createContext, useState, useEffect } from "react";
import { productData } from "../Shop-data";

export const ProductContext = createContext({
  product: null,
  setProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(productData);
  console.log(productData);
  const value = { product, setProduct };

  useEffect(() => {
    setProduct(productData);

    console.log(productData);
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
