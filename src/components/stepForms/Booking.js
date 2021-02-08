import React from "react";
import { Container, LinearProgress, Button, Box } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as yup from "yup";
import { defaultData } from "../BookingForm";

//for the date picker
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// Depending on the library you picked
import DateFnsUtils from "@date-io/date-fns";

export const Booking = ({ formData, setForm, navigation }) => {
  const { destinationFrom, destinationTo, travelDate } = formData;

  let schema = yup.object().shape({
    destinationFrom: yup.string().required("Destination is required"),
    destinationTo: yup.string().required("Destination  is required"),
  });

  return (
    //available sizes: lg","md","sm","xl","xs"
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container maxWidth="xs">
        <Formik initialValues={defaultData}>
          <Form style={{ marginTop: "1rem" }}>
            <center>
              <h1>Booking</h1>
            </center>

            <Field
              label="Booking From"
              name="destinationFrom"
              value={destinationFrom}
              component={TextField}
              type="textfield"
              variant="outlined"
              margin="normal"
              onChange={setForm}
              style={{ marginRight: "3rem" }}
              fullWidth
            />
            <Field
              label="Destination To"
              name="destinationTo"
              value={destinationTo}
              component={TextField}
              type="textfield"
              variant="outlined"
              margin="normal"
              onChange={setForm}
              fullWidth
            />
            <Field
              label="Travel Date"
              name="travelDate"
              component={DatePicker}
              margin="normal"
              // onChange={setForm}
              fullWidth
            />
            <Box mt="1rem" mb="1rem">
              <span style={{ marginRight: "6rem" }}>Prefered Shift</span>
              <Field as="select" name="shift" label="Shift">
                <option defaultValue="any" value="any">
                  Any
                </option>
                <option value="day">Day</option>
                <option value="night">Night</option>
              </Field>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigation.next()}
              margin="normal"
              fullWidth
            >
              Next
            </Button>
          </Form>
        </Formik>
      </Container>
    </MuiPickersUtilsProvider>
  );
};
