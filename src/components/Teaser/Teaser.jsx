import React, { Component } from "react";
import { Button } from "../Button/Button";
import "./Teaser.css";

export class Teaser extends Component {
  render() {
    return (
      <div className="Teaser">
        <h2>{this.props.headline}</h2>
        <br />
        {this.props.children}
        <br />
        <Button onClick={() => console.log("clicked!!")}>Hier Klicken</Button>
      </div>
    );
  }
}
