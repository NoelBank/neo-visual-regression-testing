import React, { Component } from "react";
import "./Button.css";

export class Button extends Component {
  render() {
    return (
      <button className="Button" {...this.props}>
        <span>{this.props.children}xD</span>
      </button>
    );
  }
}
