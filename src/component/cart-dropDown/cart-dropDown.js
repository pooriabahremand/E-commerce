import Button from "../sign-up/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/shopCart-context";

import "./cart-dropDown.scss";

const CartDropDown = () => {
  const { shopCartCounter, cartItems } = useContext(ShopCartContext);
  if (!shopCartCounter) {
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
        </div>
        <Button buttonType="smaller">GO TO CHECKOUT</Button>
      </div>
    );
  } else {
    return;
  }
};

export default CartDropDown;
