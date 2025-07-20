import React, { Component } from "react";
import CountClass from "./count-class";
import CountFunc from "./count-func";

export default class App extends Component {
  render() {
    return (
      <>
        <CountFunc />
        <hr />
        <CountClass />
      </>
    );
  }
}
