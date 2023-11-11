import React from "react";
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

  return (
    <nav style={navStyle}>
      <Logo style={logoStyle} />
      <div style={{ display: "flex" }}>
        <Search style={iconStyle} />
        <ShoppingCart style={iconStyle} />
        <User style={iconStyle} />
      </div>
    </nav>
  );
};

export default Navbar;
