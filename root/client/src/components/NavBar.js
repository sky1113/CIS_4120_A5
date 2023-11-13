import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
    zIndex: '1000',
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
      <Link to="/"> {/* Use Link to wrap the logo and navigate to the home page */}
        <Logo style={logoStyle} />
      </Link>
      <div style={{ display: "flex" }}>
        <Link to="/search"> {/* Link the search icon to the /search page */}
          <Search style={iconStyle} />
        </Link>
        <ShoppingCart style={iconStyle} />
        <User style={iconStyle} />
      </div>
    </nav>
  );
};

export default Navbar;
