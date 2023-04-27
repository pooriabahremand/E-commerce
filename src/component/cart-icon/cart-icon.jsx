import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { ShopCartContext } from "../../contexts/shopCart-context";
import { useContext } from "react";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIconStyled,
} from "./cart-icon.styles.jsx";

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
    <CartIconContainer onClick={onClickHandler}>
      <ShoppingIconStyled>
        <ShoppingIcon />
      </ShoppingIconStyled>
      <ItemCount>{quantityIcon}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
