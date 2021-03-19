import React from "react";
import { Container, Button, Box, Paper, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { defaultData } from "../BookingForm";
import { makeStyles } from "@material-ui/core/styles";

//for the date picker
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// Depending on the library you picked
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 2rem",
    marginTop: "1.5rem",
  },
});

export const Booking = ({ formData, setForm, navigation }) => {
  const classes = useStyles();
  const { destinationFrom, destinationTo } = formData;

  // let schema = yup.object().shape({
  //   destinationFrom: yup.string().required("Destination is required"),
  //   destinationTo: yup.string().required("Destination  is required"),
  // });

  return (
    //available sizes: lg","md","sm","xl","xs"
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container maxWidth="xs">
        <Formik initialValues={defaultData}>
          <Paper className={classes.paperStyles}>
            <Form>
              <Box mb={2}>
                <center>
                  <Typography>Booking</Typography>
                </center>
              </Box>
              <Box mb={2}>
                <Field
                  label="Booking From"
                  name="destinationFrom"
                  value={destinationFrom}
                  component={TextField}
                  type="textfield"
                  variant="outlined"
                  onChange={setForm}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Field
                  label="Destination To"
                  name="destinationTo"
                  component={TextField}
                  value={destinationTo}
                  type="textfield"
                  variant="outlined"
                  onChange={setForm}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Field
                  component={DatePicker}
                  label="Travel Date"
                  name="travelDate"
                  margin="normal"
                  fullWidth
                />
              </Box>

              <Box marginTop={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigation.next()}
                  margin="normal"
                  fullWidth
                >
                  Next
                </Button>
              </Box>
            </Form>
          </Paper>
        </Formik>
      </Container>
    </MuiPickersUtilsProvider>
  );
};
