// This code creates a React component called Navigation which renders a div containing an h1 tag and an Outlet component. The Outlet component is used to render the components associated with the current route.
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwn } from "./../assets/crown.svg";
import { UserContext } from "../contexts/user-context";
import CartIcon from "../component/cart-icon/cart-icon";
import CartDropDown from "../component/cart-dropDown/cart-dropDown";
import { signOutUser } from "../utils/firebase/firebase";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.jsx";

// import "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crwn className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/sign-in">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        <CartDropDown />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
