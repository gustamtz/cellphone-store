import React from "react";
import { Switch, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Store } from "./pages/Store";

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/" component={Store} />
    </Switch>
  );
};
