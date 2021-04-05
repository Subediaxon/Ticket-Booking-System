import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const AvailableRoutes = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="route_from" />
        <TextField source="route_to" />
        <EmailField source="vehicle_number" />
        <DateField source="travel_Date" />
        <EditButton basePath="/routes" />
        <DeleteButton basePath="/routes" />
      </Datagrid>
    </List>
  );
};

export default AvailableRoutes;
