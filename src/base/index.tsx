import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AppComponent } from "../app/app.component";

ReactDOM.render(
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>,
  document.getElementById("root")
);
