import React from "react";
import { Admin, Resource } from "react-admin";

import restProvider from "ra-data-simple-rest";
import PostUserTicket from "./PostUserTicket";
import TicketCreate from "./TicketCreate";
import TicketEdit from "./TicketEdit";
import UserList from "./UserList";

function AdminPannel() {
  return (
    <Admin title="Admin" dataProvider={restProvider("/api")}>
      <Resource
        name="ticket"
        list={PostUserTicket}
        create={TicketCreate}
        // edit={TicketEdit}
      />

      {/* <Resource
        name="user"
        list={UserList}
        // create={UserCreate}
        // edit={UserEdit}
      /> */}
      {/* <Resource
        name="routes"
        list={availableroutes}
        create={Createroutes}
         edit={EditRoutes}
      /> */}
    </Admin>
  );
}

export default AdminPannel;
