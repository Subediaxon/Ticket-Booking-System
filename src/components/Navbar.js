import "./css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="logo_nav_div">
      <div class="logo">
        <Link to="/">
          <img id="main-logo" src="./island-travel-logo.jpg"></img>
        </Link>
      </div>

      <div class="navbar">
        <ul class="main-nav">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Signup">
            <li>
              <i class="fa fa-link"></i>Signup
            </li>
          </Link>
          <Link to="/Login">
            <li>
              <i class="fa fa-photo"></i>Login
            </li>
          </Link>

          <li>
            <i class="fa fa-book"></i>About Us
            <ul class="subnav">
              <Link to="/Address">
                <li>
                  <i class="fa fa-map"></i> Address
                </li>
              </Link>
              <Link to="/Details">
                <li>
                  <i class="fa fa-list"></i>Details
                </li>
              </Link>
            </ul>
          </li>
          <Link to="/Booking">
            <li>Booking</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
