import React from "react";
import {
  Container,
  Button,
  Accordion,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Review</h3>
      <RenderAccordion
        summary="Names"
        go={go}
        details={[
          { "First Name": firstName },
          { "Last Name": lastName },
          { Nickname: nickName },
        ]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        details={[{ Address: address }, { City: city }]}
      />
      <RenderAccordion
        summary="Contact"
        go={go}
        details={[{ Phone: phone }, { Email: email }]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
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
