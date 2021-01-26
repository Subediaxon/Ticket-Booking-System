import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Address, Info } from "./stepForms/Info";
import { Booking } from "./stepForms/Booking";
import { Review } from "./stepForms/Review";
import { Submit } from "./stepForms/Submit";
import { Check } from "./stepForms/Check";

export const defaultData = {
  destinationFrom: "",
  destinationTo: "",
  travelDate: "",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  phone: "",
  email: "",
};
const steps = [
  { id: "bookings" },
  // { id: "check" },
  { id: "info" },
  { id: "review" },
  { id: "submit" },
];

export const BookingForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "bookings":
      return <Booking {...props} />;
    case "info":
      return <Info {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    case "check":
      return <Check {...props} />;
    default:
      return <div>No page found</div>;
  }

  // return (
  //   <div>
  //     <h1>Booking form</h1>
  //   </div>
  // );
};
