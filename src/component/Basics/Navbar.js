import React from "react";
import "./style.css";
const Navbar = ({ filterItem, menuList }) => {
  return (
    <div>
      <nav class="navbar bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../images/logo.png" alt="Nollyflix"></img>
          </a>
          <h1 class="text-white ">NOLLY-FLIX</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
