import React from "react";
import { DrizzleContext } from "drizzle-react";
import {
  AccountData,
  ContractData,
  ContractForm
} from "drizzle-react-components";

const ComponentContainer = ({ drizzle, drizzleState }) => (
  <div>
    <h2>Account Data</h2>
    <AccountData
      drizzle={drizzle}
      drizzleState={drizzleState}
      accountIndex="0"
      precision="3"
    />
    <h2>SimpleStorage</h2>
    <p>
      This shows a simple ContractData component with no arguments, along with a
      form to set its value.
    </p>
    <p>
      <strong>Stored Value</strong>:{" "}
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract="SimpleStorage"
        method="storedData"
      />
    </p>
    <ContractForm
      drizzle={drizzle}
      drizzleState={drizzleState}
      contract="SimpleStorage"
      method="set"
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
