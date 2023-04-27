import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./categories/categories-preview";
import Category from "./categories/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
