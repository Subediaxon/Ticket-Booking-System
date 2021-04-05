import React from "react";
import {
  Create,
  TextInput,
  DateInput,
  EditButton,
  DeleteButton,
  SimpleForm,
} from "react-admin";

const CreateRoutes = (props) => {
  return (
    <Create title="Crete new route" {...props}>
      <SimpleForm>
        <TextInput source="route_from" />
        <TextInput source="route_to" />
        <TextInput source="vehicle_number" />
        <DateInput label="Booking Date" source="travel_Date" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </SimpleForm>
    </Create>
  );
};

export default CreateRoutes;
