import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box, Typography, ButtonBase } from "@material-ui/core";
import { Icon } from "@iconify/react";
import callIn from "@iconify-icons/simple-line-icons/call-in";
import locationIcon from "@iconify-icons/dashicons/location";
import "../components/css/hotel.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
    maxHeight: 600,
  },
  desc: {
    maxWidth: 600,
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid({
  id,
  hotel_name,
  description,
  price,
  location,
  contact,
  picture,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} id="hotel-div">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="hotel pic" src={picture} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <center>
                  <Typography gutterBottom variant="h5">
                    {hotel_name}
                  </Typography>
                  <Box id="desc-box" className={classes.desc}>
                    <Typography variant="body2">{description}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    <Icon icon={locationIcon} /> {location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <Icon icon={callIn} /> {contact}
                  </Typography>
                </center>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"> {price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
