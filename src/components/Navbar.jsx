import React, { useState } from "react";
import { FaAsymmetrik, FaTimes, FaBars } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [Click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!Click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-log">
            TRVL
          </Link>
          <FaAsymmetrik />
          <div className="menu-icon" onClick={handleClick}>
            <span>{Click ? <FaTimes /> : <FaBars />}</span>
          </div>
          <ul className={Click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onCLick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/service"
                className="nav-link"
                onCLick={closeMobileMenu}
              >
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/product"
                className="nav-link"
                onCLick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-link-mobile"
                onCLick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
