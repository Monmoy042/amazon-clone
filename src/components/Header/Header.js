import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logoImage" />
        <nav>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/order">Order Review</NavLink>
          <NavLink to="/inventory">Manage Inventory</NavLink>
        </nav>
        {/* <nav>
          <a href="/shop">Shop</a>
          <a href="/order">Order</a>
          <a href="/inventory">Inventory Manage</a>
        </nav> */}
      </div>
    </>
  );
};

export default Header;
