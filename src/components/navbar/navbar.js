import React from "react";
import {NavLink} from "react-router-dom";

import NavBarSkeleton from "./navbarSkeleton.js";

const Navbar = () => {
  let overViewNavLink = (
    <NavLink exact to="/" className={"nav-link"}>Dashboard</NavLink>
  );

  let addProductNavLink = (
      <NavLink to="/add-product" className={"nav-link"}>Add Product</NavLink>
  );

  

  let NavLinks = [overViewNavLink, addProductNavLink];

  return <NavBarSkeleton navLinks={NavLinks} />;
}

export default Navbar;



