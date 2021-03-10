import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { MainScreen } from "./scenes/main";
import { NotFoundScreen } from "./scenes/not-found";
import { ExampleScreen } from "./scenes/example";

export const AppRoutes = () => (
  <Switch>
    <Route exact={true} path="/" component={MainScreen} />
    <Route path="/example" component={ExampleScreen} />
    <Route path="*" component={NotFoundScreen} />
  </Switch>
);
