import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Logopic from "../pictures/island-travel-logo.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
  },
});

export default function ImgMediaCard({
  seatClass,
  desc,
  price,
  data,
  setData,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea align="center">
        <CardMedia
          component="img"
          alt="Ticket type"
          height="100"
          image={Logopic}
        />
        <CardContent align="center">
          <Typography gutterBottom variant="h5" component="h2">
            {seatClass}
          </Typography>
          <Typography variant="body2" component="p">
            {desc}
          </Typography>
          <Typography variant="body2" component="h5">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => setData({ ...data, price })}
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
}
