import React, { Component } from "react";

export default class UserClass extends Component {
  componentDidMount() {
    // 只在组件挂载后执行一次
    this.fetchUserData(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    // 只有userId变化时才重新获取数据
    if (prevProps.userId !== this.props.userId) {
      this.fetchUserData(this.props.userId);
    }
  }

  fetchUserData(userId) {
    // 发送网络请求获取用户数据
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => this.setState({ userData: data }));
  }

  render() {
    return <div>UserClass-渲染用户数据</div>;
  }
}
