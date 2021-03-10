import * as React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { Header } from "./components/header";

interface Props extends RouteComponentProps {}

class App extends React.Component<Props> {
  render() {
    return (
      <div className="app">
        <Helmet htmlAttributes={{ lang: "ru", charSet: "utf-8" }} />
        <Header />
        <AppRoutes />
      </div>
    );
  }
}

export const AppComponent = withRouter(App);
