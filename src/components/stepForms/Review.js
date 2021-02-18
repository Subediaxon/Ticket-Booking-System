import React from "react";
import {
  Container,
  Button,
  Accordion,
  ListItemText,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import { defaultData } from "../BookingForm";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    destinationFrom,
    destinationTo,
    travelDate,
    firstName,
    lastName,
    address,
    city,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={defaultData}
        onSubmit={(formData, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(formData, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <h3 style={{ marginBottom: "1rem" }}>Review</h3>
            <RenderAccordion
              summary="Bookings"
              go={go}
              details={[
                { "Destination From": destinationFrom },
                { "Destination To": destinationTo },
                { "Travel Date": travelDate },
              ]}
            />
            <RenderAccordion
              summary="Information"
              go={go}
              details={[
                { "First Name": firstName },
                { "Last Name": lastName },
                { Address: address },
                { City: city },
                { "Contact Number": phone },
                { Email: email },
              ]}
            />

            {isSubmitting && <LinearProgress />}

            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
);
