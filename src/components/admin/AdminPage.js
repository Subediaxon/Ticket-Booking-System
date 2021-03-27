import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard";
import restProvider from "ra-data-simple-rest";
import PostUserTicket from "./PostUserTicket";
import TicketCreate from "./TicketCreate";
import TicketEdit from "./TicketEdit";
import UserList from "./UserList";

function AdminPannel() {
  return (
    <Admin
      title="Admin"
      dashboard={Dashboard}
      dataProvider={restProvider("/api")}
    >
      <Resource
        name="ticket"
        list={PostUserTicket}
        create={TicketCreate}
        // edit={TicketEdit}
      />

      <Resource
        name="user"
        list={UserList}
        // create={UserCreate}
        // edit={UserEdit}
      />
    </Admin>
  );
}

export default AdminPannel;
