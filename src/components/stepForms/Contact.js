import React from "react";
import { Container, TextField, Button, ButtonGroup } from "@material-ui/core";

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
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
          w
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </ButtonGroup>
    </Container>
  );
};
