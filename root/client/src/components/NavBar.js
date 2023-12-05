import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User } from "react-feather";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "27px 46px",
    borderBottom: "solid #1E2EDE",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    backgroundColor: "#FFF",
    zIndex: "1000",
  };

  const logoStyle = {
    height: "50px",
    width: "auto",
  };

  const iconStyle = {
    color: "#1E2EDE",
    marginLeft: "48px",
    textDecoration: "none",
    height: "36px",
  };

  const location = useLocation();

  return (
    <>
      {location.pathname.includes("/register") ||
      location.pathname.includes("/login") ||
      location.pathname.endsWith("/") ? (
        <nav style={navStyle}>
          <Link to="/">
            <Logo style={logoStyle} />
          </Link>
        </nav>
      ) : (
        <nav style={navStyle}>
          <Link to="/">
            <Logo style={logoStyle} />
          </Link>
          <div style={{ display: "flex" }}>
            <Link to="/search">
              <Search style={iconStyle} />
            </Link>
            <ShoppingCart style={iconStyle} />
            <User style={iconStyle} />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
