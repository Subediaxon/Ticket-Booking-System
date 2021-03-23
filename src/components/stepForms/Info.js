import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { defaultData } from "../BookingForm";
import {
  Container,
  Button,
  ButtonGroup,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 2rem",
    marginTop: "1.5rem",
  },
});

export const Information = ({ formData, setForm, navigation }) => {
  const {
    userData: { userInfo },
  } = useContext(UserContext);

  const classes = useStyles();
  const { fullName, city, phone, email } = formData;

  return (
    <Container maxWidth="sm">
      <Formik initialValues={defaultData}>
        <Paper className={classes.paperStyles}>
          <Form>
            <Box mb={2}>
              <center>
                <Typography>Primary Information</Typography>
              </center>
            </Box>
            <Box mb={2}>
              <Field
                label="Full Name"
                name="fullName"
                value={fullName}
                component={TextField}
                onChange={setForm}
                variant="outlined"
                fullWidth
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
                value={city}
                onChange={setForm}
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
              <Box mb={2}>
                <Field
                  label="phone"
                  name="phone"
                  type="number"
                  value={phone}
                  component={TextField}
                  onChange={setForm}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={userInfo.email}
                  component={TextField}
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </Box>
            <Box mb={2}>
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
            </Box>
          </Form>
        </Paper>
      </Formik>
    </Container>
  );
};
