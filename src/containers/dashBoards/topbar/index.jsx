import React, { useState } from "react";
import "./topbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [mkz__navbar, setMkz__navbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 108.98) {
      setMkz__navbar(true)
    } else {
      setMkz__navbar(false);
    }
  }

  window.addEventListener('scroll', changeNavBackground)

  return (
    <div className={mkz__navbar ? 'mkz__navbar active' : 'mkz__navbar'}>
      <div className="mkz__navbar-links">
        <div className="navbar-links_logo">
          Mukozi{/* <img src={logo} /> */}
        </div>
        <div className="mkz__navbar-links_container">
        <Link to="employer/"><p>Home</p></Link>
          <Link to="employer/find-candidate"><p>Candidates</p></Link>
          <Link to="employer/pricing"><p>Pricing</p></Link>
          <Link to="contact-us"><p>Contact Us</p></Link>
        </div>
      </div>
      <div className="mkz__navbar-sign">
        <Link to="/signin" className="link">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
        </Link>
        <Link to="/signup" className="link">
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
        </Link>
        <div className="topbarIconContainer">
          <Settings />
        </div>
        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
      </div>
      <div className="mkz__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mkz__navbar-menu_container scale-up-center">
          <div className="mkz__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>            
            <p><a href="find-candidate">Candidates</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
    // <div className="topbar">
    //   <div className="topbarWrapper">
    //     <div className="topLeft">
    //       <span className="logo">Mukozi admin</span>
    //     </div>
    //     <div className="topRight">
    //       <div className="topbarIconContainer">
    //         <NotificationsNone />
    //         <span className="topIconBadge">2</span>
    //       </div>
    //       <div className="topbarIconContainer">
    //         <Language />
    //         <span className="topIconBadge">2</span>
    //       </div>
    //       <div className="topbarIconContainer">
    //         <Settings />
    //       </div>
    //       <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
    //     </div>
    //   </div>
    // </div>
  );
}
