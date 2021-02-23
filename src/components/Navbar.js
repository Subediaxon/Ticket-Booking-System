import "./css/navbar.css";
import Logopic from "../pictures/island-travel-logo.jpg";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import barsIcon from "@iconify-icons/fa/bars";
import { Button } from "@material-ui/core";

function click() {
  //const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".links");

  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
}

const Navbar = () => {
  return (
    <div class="logo_nav_div">
      <div class="logo">
        <Link to="/">
          <img id="main-logo" src={Logopic}></img>
        </Link>
      </div>

      <div className="navbar">
        <ul className="main-nav nav-links">
          <Link to="/">
            <li className="links">Home</li>
          </Link>
          <Link to="/Booking">
            <li className="links">Booking</li>
          </Link>

          <li>
            <Link>
              About
              <ul class="subnav">
                <Link to="/Address">
                  <li className="links">Address</li>
                </Link>
                <Link to="/Details">
                  <li className="links">Details</li>
                </Link>
              </ul>
            </Link>
          </li>
          <Link to="/Login">
            <li className="links">Login</li>
          </Link>
          <Link to="/Signup">
            <li className="links">Signup</li>
          </Link>
        </ul>
      </div>
      <div class="hamburger">
        <Button onClick={click}>
          <Icon icon={barsIcon} />
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
