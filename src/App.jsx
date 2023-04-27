import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
// import Navigation from "./routes/navigation";
import Navigation from "./routes/navigation";
import SignIn from "./routes/SignInComponent";
import Shop from "./routes/Shop";
import CheckOut from "./routes/CheckOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="shop/*" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
