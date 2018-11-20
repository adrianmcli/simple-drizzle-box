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
    <ul>
    <li>
    <h3>Default</h3>
    <AccountData
      drizzle={drizzle}
      drizzleState={drizzleState}
      units="ether"
      accountIndex="0"
      precision="3"
    />
    </li>
    <li>
    <h3>Custom displayFunc</h3>
    <AccountData
      drizzle={drizzle}
      drizzleState={drizzleState}
      units="ether"
      accountIndex="0"
      precision="3"
      displayFunc={(acc, bal, unit) => (<p>User has {bal} {unit} @ <strong>{acc}</strong></p>)}
    />
    </li>
    </ul>
    
    <h2>SimpleStorage</h2>
    <p>
      This shows a simple ContractData component with no arguments, along with a
      form to set its value.
    </p>
      <strong>Stored Value</strong>:{" "}
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract="SimpleStorage"
        method="storedData"
      />
    <ContractForm
      drizzle={drizzle}
      drizzleState={drizzleState}
      contract="SimpleStorage"
      method="set"
    />
    
    <h2>ComplexStorage</h2>
    <p>
      This shows a ContractData component with complex data types, along with a
      table constructed from nested ContractData components.
    </p>
    <strong>Device Addresses</strong>:{" "}
    <ContractData
      drizzle={drizzle}
      drizzleState={drizzleState}
      contract="ComplexStorage"
      method="getDeviceAddresses"
    />
    <strong>Device Table</strong>:{" "}
    <ContractData
      drizzle={drizzle}
      drizzleState={drizzleState}
      contract="ComplexStorage"
      method="getDeviceAddresses"
      displayFunc={data => data.map((key, i) => (
        <ContractData key={i}
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="ComplexStorage"
          method="structs1"
          methodArgs={[key]}
          displayFunc={datum => (<tr><td>{i}</td>{datum.map((v, j) => (<td key={j}>{v}</td>))}</tr>)}
        />
      ))}
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
