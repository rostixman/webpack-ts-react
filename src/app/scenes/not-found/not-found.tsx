import * as React from "react";
import { Helmet } from "react-helmet";

interface Props extends React.HTMLProps<HTMLInputElement> {}
interface State {}

export class NotFoundScreen extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Page not found" />
        <h4>Not found page</h4>
      </React.Fragment>
    );
  }
}
