import { useForm, useStep } from "react-hooks-helper";
import { Booking } from "./stepForms/Booking";
import { Review } from "./stepForms/Review";
import { Information } from "./stepForms/Info";

export const defaultData = {
  destinationFrom: "",
  destinationTo: "",
  date: new Date(),
  fullName: "",
  city: "",
  phone: "",
  email: "",
};
const steps = [{ id: "bookings" }, { id: "information" }, { id: "review" }];

export const BookingForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "bookings":
      return <Booking {...props} />;
    case "information":
      return <Information {...props} />;
    case "review":
      return <Review {...props} />;
    default:
      return <div>No page found</div>;
  }
};
