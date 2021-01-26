import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Container } from "@material-ui/core";

export const Submit = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem" }}>
      <h3>Thank you for submitting, we will be in touch!</h3>
      <Formik
        initialValues={{
          time: new Date(),
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
    </Container>
  );
};
