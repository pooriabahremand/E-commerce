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
  shopCartCounter: false,
  setShopCartCounter: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  incrementQuantity: () => {},
  quantityIcon: 0,
  totalPrice: 0,
});

export const ShopCartProvider = ({ children }) => {
  const [shopCartCounter, setShopCartCounter] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantityIcon, setQuantityIcon] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
  const decrementQuantity = (itemToDecrement) => {
    if (itemToDecrement.quantity !== 1) {
      setCartItems((cartItems) => {
        return cartItems.map((item) => {
          if (item.id === itemToDecrement.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      });
    } else {
      const currentItem = itemToDecrement.id;
      const updatedItems = cartItems.filter((item) => item.id !== currentItem);
      setCartItems(updatedItems);
    }
  };

  const incrementQuantity = (itemToIncrement) => {
    setCartItems((cartItems) => {
      return cartItems.map((item) => {
        if (item.id === itemToIncrement.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const value = {
    shopCartCounter,
    setShopCartCounter,
    cartItems,
    setCartItems,
    decrementQuantity,
    incrementQuantity,
    addItemToCart,
    quantityIcon,
    totalPrice,
    setTotalPrice,
  };

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
};
