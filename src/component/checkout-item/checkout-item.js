import "./checkout-item.scss";
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/shopCart-context";

const CheckOutitem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { cartItems, decrementQuantity, incrementQuantity, setCartItems } =
    useContext(ShopCartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            decrementQuantity(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div
          className="arrow"
          onClick={() => {
            incrementQuantity(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          const currentItem = cartItem.id;
          const updatedItems = cartItems.filter(
            (item) => item.id !== currentItem
          );
          setCartItems(updatedItems);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutitem;
