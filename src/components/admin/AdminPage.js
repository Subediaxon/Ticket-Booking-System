import React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "../../authProvider";
import restProvider from "ra-data-simple-rest";
import PostUserTicket from "./PostUserTicket";
import TicketCreate from "./TicketCreate";
import TicketEdit from "./TicketEdit";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import Availableroutes from "./AvailableRoutes";
import Createroutes from "./CreateRoutes";
import EditRoutes from "./EditRoutes";

function AdminPannel() {
  return (
    <Admin
      loginPage="false"
      title="Admin"
      dataProvider={restProvider("api")}
      authProvider={authProvider.logout}
    >
      <Resource name="authenticate/getusers" list={UserList} edit={UserEdit} />
      <Resource
        name="ticket"
        list={PostUserTicket}
        create={TicketCreate}
        // edit={TicketEdit}
      />

      <Resource
        name="routes"
        list={Availableroutes}
        create={Createroutes}
        //edit={EditRoutes}
      />
    </Admin>
  );
}

export default AdminPannel;
