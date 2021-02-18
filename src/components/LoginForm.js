import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { useHistory } from "react-router-dom";
import { Button, LinearProgress, Box } from "@material-ui/core";
import * as yup from "yup";

const validator = yup.object({
  email: yup.string().email().required("Enter your email"),
  password: yup.string().required("Enter your password"),
});
const formInitValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const history = useHistory();
  return (
    <Formik initialValues={formInitValues} validationSchema={validator}>
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              name="email"
              type="email"
              label="Email"
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
