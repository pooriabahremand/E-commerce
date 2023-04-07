import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  let newCartItems = cartItems.filter((item) => {
    return item.name.includes(productToAdd.name);
  });
  if (newCartItems.length === 0) {
    productToAdd = { ...productToAdd, quantity: 1 };
    return [...cartItems, productToAdd];
  } else {
    return cartItems.map((item) =>
      item.name === productToAdd.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
};

export const ShopCartContext = createContext({
  shopCartCounter: null,
  setShopCartCounter: () => null,
  cartItems: [],
  addItemToCart: () => {},
  quantityIcon: 0,
});

export const ShopCartProvider = ({ children }) => {
  const [shopCartCounter, setShopCartCounter] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [quantityIcon, setQuantityIcon] = useState(0);

  useEffect(() => {
    setQuantityIcon(() => {
      let counter = 0;
      cartItems.map((item) => (counter = counter + item.quantity));
      return counter;
    });
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    shopCartCounter,
    setShopCartCounter,
    cartItems,
    addItemToCart,
    quantityIcon,
  };

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
};
