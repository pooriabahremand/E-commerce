import "./product-card.scss";
import Button from "../sign-up/button";
import { useContext } from "react";
import { ProductContext } from "../../contexts/product-context";

const ProductCard = () => {
  const { product } = useContext(ProductContext);

  return product.map(({ id, name, imageUrl, price }) => {
    return (
      <div className="product-card-container" key={id}>
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted">Add to card</Button>
      </div>
    );
  });
};
export default ProductCard;
