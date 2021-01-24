import React from "react";
import { Container, TextField, Button, ButtonGroup } from "@material-ui/core";

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Address</h3>
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
