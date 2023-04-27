import { useNavigate } from "react-router-dom";
import Button from "../sign-up/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/shopCart-context";

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropDown.styles.jsx";

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
      <CartDropDownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button buttonType="smaller" onClick={buttonClickHandler}>
          GO TO CHECKOUT
        </Button>
      </CartDropDownContainer>
    );
  }
};

export default CartDropDown;
