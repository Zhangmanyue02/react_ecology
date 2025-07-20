import React, { Component } from "react";

export default class CountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      //   <button onClick={() => console.log(this)}> 可以打印看下是马上
      //     CountClass: {this.state.count}
      //   </button>
      <button onClick={() => this.increment()}>
        CountClass: {this.state.count}
      </button>
    );
  }
}
