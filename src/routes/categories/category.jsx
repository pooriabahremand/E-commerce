import { useParams } from "react-router-dom";
import { useState, useEffect, useContext, Fragment } from "react";
import { Title, CategoryContainer } from "./category.styles";
import ProductCard from "../../component/product-card/product-card";

import { CategoriesContext } from "../../contexts/categories-context";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    setIsDataFetched(true);
  }, [category, categoriesMap]);

  if (isDataFetched === false) {
    return (
      <div>
        <h2>Loading ....</h2>
      </div>
    );
  } else {
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
        </CategoryContainer>
      </Fragment>
    );
  }
};

export default Category;
