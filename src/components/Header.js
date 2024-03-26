import React from "react";
import bibahlogo from "../images/a123.png";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo" href="">
          <img src={bibahlogo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
