import React from "react";

import "../../component style/HeaderStyle.css"

import { useDispatch } from "react-redux";
import { comelist } from "../../redux/actions/ListAction";



import more from "../../images/more.png"
import logo from "../../images/logo.png"
import fav from "../../images/favicon.d9ff36a.png"
import map from "../../images/maps.png"
import mgglass from "../../images/magnifying-glass.png"
import user from "../../images/user.png"

const Header = () => {

  const dispatch = useDispatch()



  return (
    <>
      <header>
        <div className="contentheader">
          <div className="items">
            <button onClick = {()=> dispatch(comelist()) }>
              <img src={more} alt="" /> دسته بندی
            </button>
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <a href="#" className="fav">
              <img src={fav} alt="" />
            </a>
          </div>
          <div className="search">
            <form action="">
              <input type="text" placeholder="هرچی تو ذهنت هست جستجو کن" />
            </form>
            <button>
              <img src={map} alt="" />
              اطراف من
            </button>
          </div>
          <div className="login">
            <button className="btnform">
              <img src={mgglass} alt="" />
            </button>
            <a href="">
              ورود
              <img src={user} alt="" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
