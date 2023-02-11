// This code creates a React component called Navigation which renders a div containing an h1 tag and an Outlet component. The Outlet component is used to render the components associated with the current route.
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwn } from "./../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwn className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
