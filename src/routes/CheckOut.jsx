import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./CheckOut.styles.jsx";
import { useContext, useEffect } from "react";
import { ShopCartContext } from "../contexts/shopCart-context.js";
import CheckOutitem from "../component/checkout-item/checkout-item.jsx";

const CheckOut = () => {
  const { cartItems, totalPrice, setTotalPrice } = useContext(ShopCartContext);

  useEffect(() => {
    setTotalPrice(() => {
      let price = 0;
      cartItems.map((item) => {
        return (price = item.quantity * item.price + price);
      });
      return price;
    });
  }, [cartItems]);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        var { name, id } = item;
        return <CheckOutitem key={id} cartItem={item} />;
      })}
      <Total>Total: $ {totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
