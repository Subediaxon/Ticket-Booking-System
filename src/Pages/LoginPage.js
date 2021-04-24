import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { Grid, Typography, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.loginStyles}
        justify="center"
        alignContent="center"
      >
        <Grid item xs={10} md={4} lg={6}>
          <Paper className={classes.paperStyles}>
            <Box mb={5} fontWeight="fontWeightBold">
              <Typography variant="h5" component="h1" align="center">
                Let's Log In
              </Typography>
              <Typography component="h2" align="center" color="textSecondary">
                Destination Awaits
              </Typography>
            </Box>

            <LoginForm />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
