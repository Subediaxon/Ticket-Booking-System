import { Grid, Paper, Box } from "@material-ui/core";
import HotelGrid from "./HotelGrid";
import { makeStyles } from "@material-ui/core/styles";
import { hotelList } from "../components/ValueList";

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 1.5rem",
    marginTop: "1.5rem",
  },
});

const renderIcons = () =>
  hotelList.map(
    ({ hotel_name, description, location, price, contact, picture, id }) => (
      <Box mb={10}>
        <HotelGrid
          key={id}
          hotel_name={hotel_name}
          description={description}
          location={location}
          price={price}
          picture={picture}
          contact={contact}
        />
      </Box>
    )
  );

const Hotels = () => {
  const classes = useStyles();

  return (
    <Paper>
      {renderIcons()}
      {/* <Grid container container item xs={12} spacing={3}>
        <Grid item> </Grid>
      </Grid> */}
    </Paper>
  );
};
export default Hotels;
