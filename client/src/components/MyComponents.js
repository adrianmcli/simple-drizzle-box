import React from "react";
import { DrizzleContext } from "drizzle-react";
import { AccountData } from "drizzle-react-components";

const ComponentContainer = ({ drizzle, drizzleState }) => (
  <div>
    <h2>Account Data</h2>
    <AccountData
      drizzle={drizzle}
      drizzleState={drizzleState}
      accountIndex="0"
      precision="3"
    />
  </div>
);

export default () => (
  <div>
    <h1>Drizzle React Components</h1>
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const { drizzle, drizzleState, initialized } = drizzleContext;

        if (!initialized) {
          return "Loading...";
        }

        return (
          <ComponentContainer drizzle={drizzle} drizzleState={drizzleState} />
        );
      }}
    </DrizzleContext.Consumer>
  </div>
);
