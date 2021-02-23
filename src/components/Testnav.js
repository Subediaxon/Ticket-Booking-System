import { Icon } from "@iconify/react";
import barsIcon from "@iconify-icons/fa/bars";
import { Button } from "@material-ui/core";
import "./test.css";

function click() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".links");

  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
}

const Testnav = () => {
  return (
    <nav>
      <div class="hamburger">
        <Button onClick={click}>
          <Icon icon={barsIcon} />
        </Button>
      </div>
      <ul class="nav-links">
        <li>
          <a class="links" href="#1">
            About
          </a>
        </li>
        <li>
          <a class="links" href="#2">
            Contact
          </a>
        </li>
        <li>
          <a class="links" href="#3">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Testnav;
