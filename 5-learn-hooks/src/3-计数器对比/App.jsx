import React, { Component } from "react";
import CountClass from "./count-class.jsx";
import CountFunc from "./count-func.jsx";

export default class App extends Component {
  render() {
    console.log("first");
    return (
      <div>
        <CountClass />
        <hr />
        <CountFunc />
      </div>
    );
  }
}
