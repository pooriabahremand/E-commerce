import "./product-card.scss";
import Button from "../sign-up/button";
import { useContext } from "react";
import { ProductContext } from "../../contexts/product-context";
import { ShopCartContext } from "../../contexts/shopCart-context";

const ProductCard = () => {
  const { products } = useContext(ProductContext);
  const { addItemToCart } = useContext(ShopCartContext);

  return products.map((product) => {
    const { id, imageUrl, name, price } = product;

    return (
      <div className="product-card-container" key={id}>
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button
          buttonType="inverted"
          onClick={() => {
            addItemToCart(product);
          }}
        >
          Add to card
        </Button>
      </div>
    );
  });
};
export default ProductCard;
