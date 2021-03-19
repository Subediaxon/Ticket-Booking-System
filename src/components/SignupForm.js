/*import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";*/
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useAuth } from "../hooks/useAuth";
import { useHistory } from "react-router";

// import { useContext } from "react";
// import { useAuth } from "../hooks/useAuth";
// import { useHistory } from "react-router";
// import { UserContext } from "../context/userContext";

const validator = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const useStyles = makeStyles({
  textFeildStyles: {
    width: "100%",
  },
});

const formInitValues = {
  firstname: "",
  lastname: "",
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
  const classes = useStyles();

  const { setUserContext } = useContext(UserContext);
  const { mutate: loginMutate } = useAuth("signup");
  const history = useHistory();

  const handleSubmit = (values, { setSubmitting }) => {
    loginMutate(
      { path: "/signup", credentials: values },
      {
        onSuccess: (data) => {
          setUserContext(data);
          history.push("/");
        },
        onError: (error) => setSubmitting(false),
      }
    );
  };

  return (
    <Formik
      initialValues={formInitValues}
      validationSchema={validator}
      onSubmit={handleSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box mb={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Field
                  className={classes.textFeildStyles}
                  component={TextField}
                  variant="outlined"
                  name="firstname"
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  className={classes.textFeildStyles}
                  component={TextField}
                  variant="outlined"
                  name="lastname"
                  type="text"
                  label="Last Name"
                />
              </Grid>
            </Grid>
          </Box>

          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              name="email"
              type="email"
              label="Email"
              fullWidth
            />
          </Box>
          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              type="password"
              label="Password"
              name="password"
              fullWidth
            />
          </Box>
          {isSubmitting && <LinearProgress />}
          <Box mb={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Sign Up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
export default SignupForm;
