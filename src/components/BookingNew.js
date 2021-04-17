import {
  Button,
  Box,
  Typography,
  LinearProgress,
  Grid,
  Paper,
} from "@material-ui/core";
import TeFi from "@material-ui/core/TextField";
import ImgMediaCard from "./Pricecard";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SimpleDialogForm from "./Ask";
import { tickets } from "./ValueList";

//for the date picker
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// Depending on the library you picked
import DateFnsUtils from "@date-io/date-fns";
import { useBookTicket } from "../hooks/useTicket";

const defData = {
  destinationFrom: "",
  destinationTo: "",
  dateTime: new Date(),
  price: "10",
  fullName: "",
  phone: "",
  email: "",
};

const BookingForm2 = () => {
  const { mutate: bookTicket } = useBookTicket();

  const handleBookTicket = (values, { setSubmitting }) => {
    const valuesToSend = {
      fullName: values.fullName,
      from: values.destinationFrom,
      to: values.destinationTo,
      date: values.date,
      phone: values.phone,
      number: 1,
    };
    bookTicket(valuesToSend, {
      onSuccess: (data) => {
        console.log(data);
        setSubmitting(false);
      },
      onError: (error) => {
        console.log(error);
        setSubmitting(false);
      },
    });
  };

  return (
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
                  <TeFi
                    {...params}
                    id="id"
                    label="destinationFrom"
                    variant="outlined"
                  />
                )}
              />
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
                  <TeFi
                    {...params}
                    id="id"
                    label="destinationTo"
                    variant="outlined"
                  />
                )}
              />
            </Box>

            <Box mb={3}>
              <Field component={DatePicker} name="dateTime" label="Date Time" />
            </Box>

            <Box mb={2}>
              <Field
                label="Full Name"
                name="fullName"
                component={TextField}
                variant="outlined"
                fullWidth
              />
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
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <ImgMediaCard
                    seatClass="Economy"
                    desc="Water bottle/Chips"
                    price="10"
                    setData={setValues}
                    data={values}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <ImgMediaCard
                    seatClass="Business"
                    desc="Free food, drink"
                    price="15"
                    setData={setValues}
                    data={values}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <ImgMediaCard
                    seatClass="VIP"
                    desc="free food, special bed, special beverages"
                    price="15"
                    setData={setValues}
                    data={values}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box mb={4}>
              <Paper style={{ textAlign: "center" }}>
                <Typography variant="h5">
                  Do you want hotels in {values.to} ??
                </Typography>
                <SimpleDialogForm />
              </Paper>
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
  );
};

export default BookingForm2;
