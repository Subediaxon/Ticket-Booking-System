import { Button, TextField, Box, Grid, Paper } from "@material-ui/core/";
/*import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";*/
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useAuth } from "../hooks/useAuth";
import { useHistory } from "react-router";

const validator = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});
const formInitValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
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
  const { mutate: SignupMutate } = useAuth("signup");
  const history = useHistory();

  const handleSignup = (values, { setSubmitting }) => {
    SignupMutate(
      { path: "/signup", credentials: values },
      {
        onSuccess: (data) => {
          history.push("/");
        },
        onError: (error) => setSubmitting(false),
      }
    );
  };
  return (
    <>
      <Formik initialValues={formInitValues} validationSchema={validator}>
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box mb={2}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mb={2}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box mb={2}>
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    placeholder="test@test.com"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                {/*PAssword Field */}

                <Box mb={2}>
                  <TextField
                    name="password"
                    label="Password"
                    type="Password"
                    variant="outlined"
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mb={2}>
                  <TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="Password"
                    variant="outlined"
                  ></TextField>
                </Box>
              </Grid>
            </Grid>

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
    </>
  );
};
export default SignupForm;
