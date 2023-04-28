import { Fragment, useContext } from "react";
import { CategoriesContext } from "./../../contexts/categories-context";
import ProductCard from "./../../component/product-card/product-card";
import { CategoryPreviewContainer, Title, Preview } from "./../shop.styles";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const filteredArray = categoriesMap[title].slice(0, 4);
        return (
          <CategoryPreviewContainer key={title}>
            <h2>
              <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
              {filteredArray.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Preview>
          </CategoryPreviewContainer>
        );
      })}
    </Fragment>
  );
};
{
}

export default CategoriesPreview;
