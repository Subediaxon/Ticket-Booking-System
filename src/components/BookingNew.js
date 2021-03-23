import {
  Button,
  Box,
  Typography,
  LinearProgress,
  Container,
} from "@material-ui/core";
import TeFi from "@material-ui/core/TextField";
import ImgMediaCard from "./Pricecard";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Autocomplete from "@material-ui/lab/Autocomplete";

//for the date picker
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// Depending on the library you picked
import DateFnsUtils from "@date-io/date-fns";

const tickets = [
  { from: "kathmandu", to: "pokhara" },
  { from: "kathmandu", to: "Biratnagar" },
  { from: "Chitwan", to: "Biratnagar" },
];

const defData = {
  destinationFrom: "",
  destinationTo: "",
  dateTime: new Date(),
  fullName: "",
  city: "",
  phone: "",
  email: "",
};

const BookingForm2 = () => {
  return (
    <Container maxWidth={"xs"}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={defData}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting, setValues, values }) => (
            <Form>
              <Box mb={2}>
                <center>
                  <Typography>Booking</Typography>
                </center>
              </Box>
              <Box mb={2}>
                <Autocomplete
                  id="combo-box-from"
                  options={tickets}
                  getOptionLabel={(option) => option.from}
                  style={{ width: 300 }}
                  onChange={(event, newValue) => {
                    if (newValue == null) return;
                    setValues({ ...values, from: newValue.from });
                  }}
                  renderInput={(params) => (
                    <TeFi {...params} label="From" variant="outlined" />
                  )}
                />

                {/* <Field
                  label=" From"
                  name="destinationFrom"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                /> */}
              </Box>
              <Box mb={2}>
                <Autocomplete
                  id="combo-box-to"
                  options={tickets}
                  getOptionLabel={(option) => option.to}
                  style={{ width: 300 }}
                  onChange={(event, newValue) => {
                    if (newValue == null) return;
                    setValues({ ...values, to: newValue.to });
                  }}
                  renderInput={(params) => (
                    <TeFi {...params} label="To" variant="outlined" />
                  )}
                />
              </Box>
              {/* <Box mb={2}>
                <Field
                  label="Destination To"
                  name="destinationTo"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                />
              </Box> */}
              <Box mb={2}>
                <Field
                  label="Full Name"
                  name="fullName"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={3}>
                <Field
                  component={DatePicker}
                  name="dateTime"
                  label="Date Time"
                />
              </Box>

              <Box mb={2}>
                <center>
                  <Typography>Address</Typography>
                </center>
              </Box>
              <Box mb={2}>
                <Field
                  label="City"
                  name="city"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <center>
                  <h1>Contact Information</h1>
                </center>
              </Box>
              <Box mb={2}>
                <Field
                  label="phone"
                  name="phone"
                  type="number"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={3}>
                <ImgMediaCard />
              </Box>
              {isSubmitting && <LinearProgress />}
              <Box mb={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default BookingForm2;
