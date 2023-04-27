import {
  ProductCardContainer,
  Footer,
  Price,
  Name,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../sign-up/button";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories-context";
import { ShopCartContext } from "../../contexts/shopCart-context";
const ProductCard = ({ product }) => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(ShopCartContext);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (Object.keys(categoriesMap).length > 0) {
      setIsDataFetched(true);
    } else {
      setIsDataFetched(false);
    }
  }, [categoriesMap]);

  return (
    <ProductCardContainer>
      <img src={product.imageUrl} alt={`${product.name}`} />
      <Footer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => {
          addItemToCart(product);
        }}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
