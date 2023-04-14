import "./CheckOut.scss";
import { useContext, useEffect } from "react";
import { ShopCartContext } from "./../contexts/shopCart-context";
import CheckOutitem from "../component/checkout-item/checkout-item";

const CheckOut = () => {
  const {
    cartItems,
    decrementQuantity,
    incrementQuantity,
    setCartItems,
    totalPrice,
    setTotalPrice,
  } = useContext(ShopCartContext);

  useEffect(() => {
    setTotalPrice(() => {
      let price = 0;
      cartItems.map((item) => {
        return (price = item.quantity * item.price + price);
      });
      return price;
    });
  }, [cartItems]);

  //   const totalPrice = () => {

  //   };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        var { name, id } = item;
        return <CheckOutitem key={id} cartItem={item} />;
      })}
      <span className="total">Total: $ {totalPrice}</span>
    </div>
  );
};

export default CheckOut;

{
  /* <div key={id}>
            <h1>{name}</h1>
            <div className="quantity-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="left-arrow"
                onClick={() => {
                  decrementQuantity(item);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <p className="quantity">{item.quantity}</p>
              <span
                onClick={() => {
                  const currentItem = item.id;
                  const updatedItems = cartItems.filter(
                    (item) => item.id !== currentItem
                  );
                  setCartItems(updatedItems);
                }}
              >
                X
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="right-arrow"
                onClick={() => {
                  incrementQuantity(item);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div> */
}
