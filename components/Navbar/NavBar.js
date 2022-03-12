import React from "react";
import "./Navbar.css";
import mainLogo from "../resources/logo.png";


function NavBar(props) {
  return (
  <div className="Navbar">
    <ul>
      <li><img src={mainLogo} alt="logo"/></li>
      <li onClick={()=>props.closeBtn(true)}>Explore</li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Source Code</a></li>
      <li><a href="#">Portfolio Website</a></li>
      <li>About</li>
    </ul>

    
  </div>
  );
}

export default NavBar;
