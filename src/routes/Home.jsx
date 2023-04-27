import { Outlet } from "react-router-dom";

import AllCategories from "../component/directory/AllCategories";

const Home = () => {
  

  return (
    <div>
      <Outlet />
      <AllCategories />;
    </div>
  );
};

export default Home;
