import React from "react";
import {
  Edit,
  TextInput,
  EditButton,
  DeleteButton,
  SimpleForm,
} from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Edit users info " {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="role" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="email" type="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
