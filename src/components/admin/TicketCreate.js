import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const TicketCreate = (props) => {
  return (
    <Create title="create new ticket" {...props}>
      <SimpleForm>
        <TextInput source="fullName" />
        <TextInput source="from" />
        <TextInput source="to" />
        <TextInput source="phone" type="number" />
        <TextInput source="email" type="email" placeholder="test@test.com" />
        <DateInput label="Booking Date" source="date" />
      </SimpleForm>
    </Create>
  );
};
export default TicketCreate;
