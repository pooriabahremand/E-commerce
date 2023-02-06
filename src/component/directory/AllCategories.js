import Category from "../category-item/category";

import "./AllCategories.scss";

const AllCategories = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default AllCategories;
