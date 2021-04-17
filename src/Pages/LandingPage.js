import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import backgroundImage from "../pictures/averie-woodard-5d20kdvFCfA-unsplash.jpg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../components/css/landing.css";

const Landing = () => {
  return (
    <div>
      <Container id="container">
        <figure className="position-relative">
          <img
            src={backgroundImage}
            alt="Background Image"
            className="img-fluid"
          />
          <figcaption>
            The more you travel
            <br />
            The more you Learn
            <br />
            <Button
              id="book-btn"
              component={Link}
              to="/booking"
              color="inherit"
            >
              Book Now
            </Button>
          </figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default Landing;
