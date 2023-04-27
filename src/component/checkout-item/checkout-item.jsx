import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Name,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/shopCart-context";

const CheckOutitem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { cartItems, decrementQuantity, incrementQuantity, setCartItems } =
    useContext(ShopCartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow
          onClick={() => {
            decrementQuantity(cartItem);
          }}
        >
          &#10094;
        </Arrow>
        <Value> {quantity} </Value>
        <Arrow
          onClick={() => {
            incrementQuantity(cartItem);
          }}
        >
          &#10095;
        </Arrow>
      </Quantity>
      <Name>{price}</Name>
      <RemoveButton
        onClick={() => {
          const currentItem = cartItem.id;
          const updatedItems = cartItems.filter(
            (item) => item.id !== currentItem
          );
          setCartItems(updatedItems);
        }}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutitem;
