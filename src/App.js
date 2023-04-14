import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import SignIn from "./routes/SignInComponent";
import Shop from "./component/Shop/Shop";
import CheckOut from "./routes/CheckOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
