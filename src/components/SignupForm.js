import {
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core/";
/*import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";*/
import * as yup from "yup";
import { Formik, Form } from "formik";

const validator = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});
const formInitValues = {
  email: "",
  password: "",
};
/*
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],
    },
  },
});*/
const SignupForm = () => {
  return (
    <>
      <Formik initialValues={formInitValues} validationSchema={validator}>
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Paper>
              <Grid container maxWidth="xs" justify="center">
                <Grid item>
                  <Box mb={2}>
                    <Typography variant={"h4"}>Let's Sign up</Typography>
                  </Box>
                  <Box mb={2}>
                    <TextField
                      variant="standard"
                      color="primary"
                      label="First Name"
                      name="firstName"
                      required
                    ></TextField>
                    <TextField
                      variant="standard"
                      color="primary"
                      label="Last Name"
                      name="lastName"
                      required
                    ></TextField>
                  </Box>
                  <Box>
                    <Box mb={2}>
                      <TextField
                        variant="standard"
                        color="primary"
                        label="Email"
                        type="Email Address"
                        placeholder="test@test.com"
                        name="email"
                        required
                        fullWidth
                      ></TextField>
                    </Box>

                    {/*PAssword Field */}
                    <Box mb={2}>
                      <TextField
                        variant="standard"
                        color="primary"
                        label="Password"
                        type="Password"
                        name="password"
                        required
                      ></TextField>

                      <TextField
                        variant="standard"
                        color="primary"
                        label="Confirm Password"
                        type="Password"
                        name="confirmPassword"
                        required
                      ></TextField>
                    </Box>

                    <Button
                      variant="contained"
                      color="primary"
                      maxWidth={"xs"}
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default SignupForm;
