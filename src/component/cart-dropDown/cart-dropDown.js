import Button from "../sign-up/button";
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/shopCart-context";

import "./cart-dropDown.scss";

const CartDropDown = () => {
  const { shopCartCounter } = useContext(ShopCartContext);
  if (!shopCartCounter) {
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items" />
        <Button buttonType="smaller">GO TO CHECKOUT</Button>
      </div>
    );
  } else {
    return;
  }
};

export default CartDropDown;
