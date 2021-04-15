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

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="role" />
        <TextField source="id" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <EmailField source="email" />
        <DateField source="userCreation" />
        <EditButton basePath="./UserEdit" />
        <DeleteButton basePath="./UserDelete" />
      </Datagrid>
    </List>
  );
};

export default UserList;
