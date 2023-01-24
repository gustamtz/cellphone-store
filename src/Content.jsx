import React from "react";
import { Switch, Route } from "react-router-dom";
import { Store } from "./pages/Store";

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/store" component={Store} />
    </Switch>
  );
};
