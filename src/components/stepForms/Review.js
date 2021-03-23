import React from "react";
import { useBookTicket } from "../../hooks/useTicket";
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

export const Review = ({ formData, navigation }) => {
  const { mutate: bookTicket } = useBookTicket();
  const { go } = navigation;

  const {
    destinationFrom,
    destinationTo,
    date,
    fullName,
    city,
    phone,
    email,
  } = formData;

  const handleBookTicket = (values, { setSubmitting }) => {
    const valuesToSend = {
      fullName: values.fullName,
      from: values.destinationFrom,
      to: values.destinationTo,
      date: values.date,
      phone: values.phone,
      number: 1,
    };
    bookTicket(valuesToSend, {
      onSuccess: (data) => {
        console.log(data);
        setSubmitting(false);
      },
      onError: (error) => {
        console.log(error);
        setSubmitting(false);
      },
    });
  };

  return (
    <Container maxWidth="xs">
      <Formik initialValues={formData} onSubmit={handleBookTicket}>
        {({ submitForm, isSubmitting }) => (
          <Form>
            <h3 style={{ marginBottom: "1rem" }}>Review</h3>
            <RenderAccordion
              summary="Bookings"
              go={go}
              details={[
                { "Destination From": destinationFrom },
                { "Destination To": destinationTo },
                { "Travel Date": date },
              ]}
            />
            <RenderAccordion
              summary="Information"
              go={go}
              details={[
                { "Full Name": fullName },
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
