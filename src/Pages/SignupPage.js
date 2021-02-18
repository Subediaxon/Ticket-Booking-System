import { useHistory } from "react-router-dom";
import { Grid, Typography, Button, Link, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from "../components/SignupForm";

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 3rem",
    marginTop: "1.5rem",
  },
  signupStyles: {
    marginTop: "2rem",
  },
});

const Signup = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.signupStyles}
        justify="center"
        alignContent="center"
      >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperStyles}>
            <Box mb={5} fontWeight="fontWeightBold">
              <Typography variant="h4" component="h1" align="center">
                Let's join
              </Typography>
            </Box>

            <SignupForm />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
