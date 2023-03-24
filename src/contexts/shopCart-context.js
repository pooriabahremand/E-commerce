import { createContext, useState } from "react";

export const ShopCartContext = createContext({
  shopCartCounter: null,
  setShopCartCounter: () => null,
});

export const ShopCartProvider = ({ children }) => {
  const [shopCartCounter, setShopCartCounter] = useState(null);
  const value = { shopCartCounter, setShopCartCounter };

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
};
