import "./css/navbar.css";

const Navbar = () => {
  return (
    <div class="logo_nav_div">
      <div class="logo">
        <a>
          <img id="main-logo" src="./island-travel-logo.jpg"></img>
        </a>
      </div>

      <div class="navbar">
        <ul class="main-nav">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="./SignupForm">
              <i class="fa fa-link"></i>Signup
            </a>
            {/*
            <ul class="subnav">
              <li>
                <a>
                  <i class="fa fa-laptop"></i>Product 1
                </a>
              </li>
              <li>
                <a>
                  <i class="fa fa-television"></i>Product 2
                </a>
              </li>
              <li>
                <a>
                  <i class="fa fa-mobile"></i>Product 3
                </a>
              </li>
            </ul>
        */}
          </li>
          <li>
            <a href="..">
              <i class="fa fa-photo"></i>Login
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-book"></i>About Us
            </a>

            <ul class="subnav">
              <li>
                <a>
                  <i class="fa fa-map"></i> Address
                </a>
              </li>
              <li>
                <a>
                  <i class="fa fa-list"></i>Details
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <i class="fa fa-phone"></i>Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
