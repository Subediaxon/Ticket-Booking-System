import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { format } from "@date-io/moment";

// Depending on the library you picked
import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from "@date-io/moment";

export function Check({ navigation }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Formik
        initialValues={{
          time: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field component={DatePicker} name="date" label="Date" />
            <br />

            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
}
