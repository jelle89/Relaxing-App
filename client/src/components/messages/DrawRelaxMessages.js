import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DrawRelaxMessages extends Component {
  render() {
    console.log("hallo propjes", this.props.relaxmessages);
    if (!this.props) return "......";
    return (
      <div>
        {!this.props.relaxmessages && <li>Loading relax messages...</li>}
        <ul>
          {this.props.relaxmessages &&
            this.props.relaxmessages.map(relaxmessage => (
              <li key={relaxmessage.id}>
                <p>{relaxmessage.text}</p>
              </li>
            ))}
        </ul>

        <Link to="/">Back to the homepage</Link>
      </div>
    );
  }
}