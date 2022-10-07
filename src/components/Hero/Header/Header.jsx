import React from "react";
import "./Header.scss";

import logo from "../../../assets/images/logo.png";
import Navigation from "../Navigation/Navigation";
import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter.png";
import youtube from "../../../assets/images/youtube.png";
import pinterest from "../../../assets/images/pinterest.png";
import behance from "../../../assets/images/behance.png";
import search from "../../../assets/images/Search.png";


const Social = () => {
  return (
    <div className="Social">
      <a href="www.facebook.com">
        <img src={facebook} />
      </a>
      <a href="">
        <img src={twitter} />
      </a>
      <a href="">
        <img src={youtube} />
      </a>
      <a href="">
        <img src={pinterest} />
      </a>
      <a href="">
        <img src={behance} />
      </a>
    </div>
  );
};

const Search = () => {
  return <div className="Search">
    <button>
      <img src={search}/>
    </button>
  </div>;
};

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src={logo} />
      </div>
      <div className="Header__right">
        <Navigation />
        <Social />
        <Search />
      </div>
    </div>
  );
};
export default Header;
