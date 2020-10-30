import React, { Component } from "react";
import { Button } from "../Button/Button";
import "./Card.css";

export class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.headline}</h2>
        <br />
        {this.props.children}
        <br />
        <Button onClick={() => console.log("clicked!!")}>Hier Klicken</Button>
      </div>
    );
  }
}
