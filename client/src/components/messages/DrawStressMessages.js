import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DrawStressMessages extends Component {
  render() {
    console.log("hallo propjes", this.props.stressmessages);
    if (!this.props) return "......";
    return (
      <div>
        {!this.props.stressmessages && <li>Loading stress messages...</li>}
        <ul>
          {this.props.stressmessages &&
            this.props.stressmessages.map(stressmessage => (
              <li key={stressmessage.id}>
                <p>{stressmessage.text}</p>
              </li>
            ))}
        </ul>

        <Link to="/">Back to the homepage</Link>
      </div>
    );
  }
}