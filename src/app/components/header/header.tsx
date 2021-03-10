import * as React from "react";
import { Link } from "react-router-dom";

export const Header: React.SFC = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li>
          <Link to="/notFoundUrl">BlaBla page</Link>
        </li>
      </ul>
    </header>
  );
};
