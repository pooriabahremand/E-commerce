import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { ShopCartContext } from "../../contexts/shopCart-context";
import { useContext } from "react";

import "./cart-icon.scss";

const CartIcon = () => {
  const { shopCartCounter, setShopCartCounter, quantityIcon } =
    useContext(ShopCartContext);
  const onClickHandler = () => {
    if (shopCartCounter) {
      setShopCartCounter(false);
    } else {
      setShopCartCounter(true);
    }
  };

  return (
    <div className="cart-icon-container" onClick={onClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantityIcon}</span>
    </div>
  );
};

export default CartIcon;
