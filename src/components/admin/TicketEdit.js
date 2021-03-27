import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const TicketEdit = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="fullName" />
        <TextInput source="from" />
        <TextInput source="to" />
        <TextInput source="phone" />
        <TextInput source="email" />
        <DateInput label="Booking Date" source="date" />
      </SimpleForm>
    </Edit>
  );
};

export default TicketEdit;
