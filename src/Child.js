import React from "react";

class Child extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

export default Child;
