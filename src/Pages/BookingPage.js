import { React, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Paper, Typography, Button } from "@material-ui/core";
import BookingForm2 from "../components/BookingNew";

import { BookingForm } from "../components/BookingForm";

import { Booking } from "../components/stepForms/Booking";
import KhaltiCheckout from "khalti-checkout-web";

let config = {
  // replace this key with yours
  publicKey: "test_public_key_c9af267539284f83a329b9e3f1d43f33",
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

let checkout = new KhaltiCheckout(config);
const myfunc = function () {
  // minimum transaction amount must be 10, i.e 1000 in paisa.
  checkout.show({ amount: 1000 });
};

const useStyles = makeStyles({
  paperStyles: {
    padding: "1.5rem 1.5rem",
    marginTop: "1.5rem",
  },
});

const BookingPage = () => {
  const paymentButton = useRef(null);
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Paper className={classes.paperStyles}>
        <Box mb={3.5}>
          <center>
            <Typography variant="h4">Booking</Typography>
          </center>
        </Box>
        <BookingForm2 />
        <Button id="payment-button" ref={paymentButton} onClick={myfunc}>
          Pay with khalti
        </Button>
      </Paper>
    </Container>
  );
};
export default BookingPage;
