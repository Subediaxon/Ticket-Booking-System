import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useAuth } from "../hooks/useAuth";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { useHistory } from "react-router-dom";
import { Button, LinearProgress, Box } from "@material-ui/core";
import * as yup from "yup";

const validator = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const formInitValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { setUserContext } = useContext(UserContext);
  const { mutate: loginMutate } = useAuth("login");
  const history = useHistory();

  const handleLogin = (values, { setSubmitting }) => {
    loginMutate(
      { path: "/login", credentials: values },
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
      onSubmit={handleLogin}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box mb={3}>
            <Field
              label="Email"
              name="email"
              component={TextField}
              type="email"
              variant="outlined"
              placeholder="example@example.com"
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
              Continue
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
