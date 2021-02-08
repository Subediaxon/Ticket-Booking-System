import React from "react";
import { Container, TextField, Button, ButtonGroup } from "@material-ui/core";
import { defaultData } from "../BookingForm";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

export const Information = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, address, city, phone, email } = formData;

  let schema = yup.object().shape({
    address: yup.string().required("address is required"),
    city: yup.string().required("city  is required"),
    phone: yup.string().required("phone  is required"),
    email: yup.string().required("email  is required"),
  });

  return (
    <Container maxWidth="xs">
      <Formik initialValues={defaultData}>
        <Form style={{ marginTop: "1rem" }}>
          <center>
            <h1>Primary Information</h1>
          </center>
          {/* <Field
            label="First Name"
            name="firstname"
            value={firstName}
            component={TextField}
            type="textfield"
            variant="outlined"
            margin="normal"
            onChange={setForm}
            fullWidth
          />
          <Field
            label="Last Name"
            name="lastName"
            value={lastName}
            component={TextField}
            type="textfield"
            onChange={setForm}
            variant="outlined"
            margin="normal"
            variant="outlined"
            fullWidth
          /> */}
          <TextField
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <center>
            <h1>Address</h1>
          </center>

          <TextField
            label="Address"
            name="address"
            value={address}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <TextField
            label="City"
            name="city"
            value={city}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <center>
            <h1>Contact Information</h1>
          </center>
          <TextField
            label="phone"
            name="phone"
            value={phone}
            type="number"
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            placeholder="test@test.com"
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <ButtonGroup style={{ marginTop: "1rem" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigation.previous()}
              style={{ marginRight: "1rem" }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigation.next()}
            >
              Next
            </Button>
          </ButtonGroup>
        </Form>
      </Formik>
    </Container>
  );
};
