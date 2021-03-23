import { Typography, Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paperStyles: {
    padding: "2rem 3rem",
    margin: "1.5rem 10rem",
  },
  loginStyles: {
    marginTop: "2rem",
  },
  gridItems: {
    marginTop: "1rem",
  },
});

const RouteDisplay = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paperStyles}>
        <Grid
          container
          className={classes.loginStyles}
          justify="center"
          alignContent="center"
        >
          <Grid item xs={12} className={classes.gridItems}>
            <Paper>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                small grid
              </Grid>
              <Button color="primary" variant="outlined">
                Book now
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.gridItems}>
            <Button>
              <Typography>This is a test .</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RouteDisplay;
