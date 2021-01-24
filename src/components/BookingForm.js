import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Contact } from "./stepForms/Contact";
import { Address } from "./stepForms/Address";
import { Names } from "./stepForms/Names";
import { Review } from "./stepForms/Review";
import { Submit } from "./stepForms/Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  nickName: "",
  address: "",
  city: "",
  phone: "",
  email: "",
};
const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

export const BookingForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Booking form</h1>
    </div>
  );
};
