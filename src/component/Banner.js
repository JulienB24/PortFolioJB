import React from "react";
import Header from "./Header";
import NavBarre from "./NavBarre";

function Banner() {
  return (
    <div
      id="banner"
      className="flex-container flex-lg-row align-items-center justify-content-between w-100"
    >
      <div id="headerPosition">  <Header /></div>
    
      <NavBarre />
    </div>
  );
}

export default Banner;
