import React, { Component } from "react";
import UserClass from "./user-class";
import UserFunc from "./user-func";

export default class App extends Component {
  render() {
    return (
      <div>
        <UserClass userId={1} />
        <hr />
        <UserFunc userId={1} />
      </div>
    );
  }
}
