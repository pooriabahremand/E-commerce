import { useNavigate } from "react-router-dom";
import Button from "../sign-up/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/shopCart-context";

import "./cart-dropDown.scss";

const CartDropDown = () => {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate("/checkout");
  };
  const { shopCartCounter, cartItems } = useContext(ShopCartContext);
  if (!shopCartCounter) {
    return;
  } else {
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
        </div>
        <Button buttonType="smaller" onClick={buttonClickHandler}>
          GO TO CHECKOUT
        </Button>
      </div>
    );
  }
};

export default CartDropDown;
