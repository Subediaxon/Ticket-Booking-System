import React from "react";
import Map from "../components/Map";

// Must change the location to something else

const location = {
  address: "Nepal Booking Pvt. Ltd.",
  lat: 27.72175311413254,
  lng: 85.36200812606955,
};

const Address = () => {
  return (
    <>
      <center>
        <h1>This is a Address page</h1>
        <Map location={location} zoomLevel={17} />
      </center>
    </>
  );
};

export default Address;
