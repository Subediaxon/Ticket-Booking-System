import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Paper, Typography } from "@material-ui/core";
import BookingForm2 from "../components/BookingNew";
import { BookingForm } from "../components/BookingForm";

import { Booking } from "../components/stepForms/Booking";

const useStyles = makeStyles({
  paperStyles: {
    padding: "1.5rem 1.5rem",
    marginTop: "1.5rem",
  },
});

const BookingPage = () => {
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
      </Paper>
    </Container>
  );
};
export default BookingPage;
