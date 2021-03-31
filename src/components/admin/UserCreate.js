import React from "react";
import {
  Create,
  TextInput,
  EditButton,
  DeleteButton,
  SimpleForm,
} from "react-admin";

const UserList = (props) => {
  return (
    <Create title="Crete new user" {...props}>
      <SimpleForm>
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="email" type="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </SimpleForm>
    </Create>
  );
};

export default UserList;
