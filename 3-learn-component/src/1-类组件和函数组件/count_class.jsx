import React from "react";

class CountClass extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "I am count class",
    };
  }
  render() {
    const { msg } = this.state;
    return <h2>{msg}</h2>;
  }
}

export default CountClass;
