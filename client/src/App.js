import React, { Component } from "react";
import { Drizzle } from "drizzle";
import { DrizzleContext } from "drizzle-react";

import MyComponents from "./components/MyComponents";
import SimpleStorage from "./contracts/SimpleStorage.json";
import ComplexStorage from "./contracts/ComplexStorage.json";

const options = {
  contracts: [SimpleStorage, ComplexStorage],
  web3: { fallback: { url: "ws://127.0.0.1:9545" } }
};
const drizzle = new Drizzle(options);

class App extends Component {
  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <MyComponents />
      </DrizzleContext.Provider>
    );
  }
}

export default App;
