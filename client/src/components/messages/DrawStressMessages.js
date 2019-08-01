import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DrawStressMessages"

export default class DrawStressMessages extends Component {
  render() {
    console.log("hallo propjes", this.props.stressmessages);
    if (!this.props) return "......";
    return (
      <div id="myUL">
        {!this.props.stressmessages && <li>Loading stress messages...</li>}
        <ul id="myUL">
          {this.props.stressmessages &&
            this.props.stressmessages.map(stressmessage => (
              <li key={stressmessage.id}>
                <p>{stressmessage.text}</p>
              </li>
            ))}
        </ul>

        <Link to="/">Home</Link>
      </div>
    );
  }
}