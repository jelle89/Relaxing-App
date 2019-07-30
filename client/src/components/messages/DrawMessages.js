import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DrawMessages extends Component {
  render() {
    console.log("hallo propjes", this.props.messages);
    if (!this.props) return "......";
    return (
      <div>
        {!this.props.messages && <li>Loading messages...</li>}
        <ul>
          {this.props.messages &&
            this.props.messages.map(message => (
              <li key={message.id}>
                <p>{message.text}</p>
              </li>
            ))}
        </ul>

        <Link to="/">Back to the homepage</Link>
      </div>
    );
  }
}