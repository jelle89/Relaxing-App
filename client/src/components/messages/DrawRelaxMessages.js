import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DrawRelaxMessages.css"

export default class DrawRelaxMessages extends Component {
  render() {
    console.log("hallo propjes", this.props.relaxmessages);
    if (!this.props) return "......";
    return (
      <div id="myDIV">
        {!this.props.relaxmessages && <li>Loading relax messages...</li>}
        <ul id="myUL">
          {this.props.relaxmessages &&
            this.props.relaxmessages.map(relaxmessage => (
              <li key={relaxmessage.id}>
                <p>{relaxmessage.text}</p>
              </li>
            ))}
        </ul>
        <footer><Link to="/">Home</Link></footer>
      </div>
    );
  }
}