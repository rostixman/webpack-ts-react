import * as React from "react";
import { Helmet } from "react-helmet";

interface Props extends React.HTMLProps<HTMLInputElement> {}
interface State {}

export class ExampleScreen extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Example page" />
        <h4>Example page</h4>
      </React.Fragment>
    );
  }
}
