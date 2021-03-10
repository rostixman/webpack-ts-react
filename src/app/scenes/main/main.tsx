import * as React from "react";
import { Helmet } from "react-helmet";

import { Map } from "../../components/map";

interface Props extends React.HTMLProps<HTMLInputElement> {}
interface State {}

export class MainScreen extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Main page" />
        <h4>Main page</h4>
        <Map />
      </React.Fragment>
    );
  }
}
