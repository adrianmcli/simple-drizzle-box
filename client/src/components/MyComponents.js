import React from "react";
import { DrizzleContext } from "drizzle-react";

export default () => (
  <div>
    <h1>Drizzle React Components</h1>
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const { drizzle, drizzleState, initialized } = drizzleContext;

        if (!initialized) {
          return "Loading...";
        }

        return <div>Drizzle is ready.</div>
      }}
    </DrizzleContext.Consumer>
  </div>
);
