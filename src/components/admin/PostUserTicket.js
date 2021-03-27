import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostUserTicket = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="fullName" />
        <TextField source="from" />
        <TextField source="to" />
        <TextField source="phone" />
        <TextField source="email" />
        <DateField source="date" />
        <EditButton basePath="/api/ticket" />
        <DeleteButton basePath="/api/ticket" />
      </Datagrid>
    </List>
  );
};
export default PostUserTicket;
