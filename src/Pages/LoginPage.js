import { useHistory } from "react-router-dom";
import { Grid, Typography, Button, Link, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GTranslate } from "@material-ui/icons/";
import Form from "../components/LoginForm";
import FormikForm from "../components/LoginForm";

/*
import DividerWithText from "../Components/DividerWithText";
*/
const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 3rem",
    marginTop: "1.5rem",
  },
  loginStyles: {
    marginTop: "2rem",
  },
});

const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  const pushToForgotPass = (event) => {
    event.preventDefault();
    history.push("/password/request");
  };
  const handleGoogleOauth = () => {
    window.location.href = "http://localhost:4000/api/auth/google";
  };

  return (
    <>
      <Grid
        className={classes.loginStyles}
        container
        justify="center"
        alignContent="center"
      >
        <Grid item xs={10} md={6} lg={5}>
          <Paper className={classes.paperStyles}>
            <Box mb={5} fontWeight="fontWeightBold">
              <Typography variant="h5" component="h1" align="center">
                Let's Log In
              </Typography>
              <Typography component="h2" align="center" color="textSecondary">
                Destination Awaits
              </Typography>
            </Box>
            <Box mb={5}>
              <Button
                onClick={handleGoogleOauth}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<GTranslate />}
                fullWidth
              >
                Continue with Google
              </Button>
            </Box>
            <FormikForm />
            <Link href="#" onClick={pushToForgotPass}>
              <Typography align="center">I forgot my password</Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
