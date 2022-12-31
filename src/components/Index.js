import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateNewFood from "./CreateNewFood";
import Content from "./Content";
import ChatAdmin from "./Chat";

/* ------------------------------------ROUTER------------------------------------ */
function Index() {
  return (
    <>
      <Switch>
        <Route path={"/content/managerMenu"}>
          <Content />
        </Route>

        <Route path={"/content/create"}>
          <CreateNewFood />
        </Route>

        {/* <Route path={"/content/delete"}>
          <DeleteFood />
        </Route>

        <Route path={"/content/edit"}>
          <EditFood />
        </Route> */}

        <Route path={"/chat"}>
          <ChatAdmin />
        </Route>
      </Switch>
    </>
  );
}

export default Index;
