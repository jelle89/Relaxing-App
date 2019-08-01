import React, { Component } from "react";
import { connect } from "react-redux";
import Sky from "react-sky";
import Sound from "react-sound";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
import {
  submitRelaxMessage,
  loadRelaxMessages
} from "../actions/relaxmessages";
import RelaxMessageContainer from "./messages/RelaxMessageContainer";
import DrawRelaxMessages from "./messages/DrawRelaxMessages";
import relax1 from "../images/relax1.png";
import relax2 from "../images/relax2.jpg";
import relax3 from "../images/relax3.png";
import audio2 from "../audio/relax1.mp3";
// import "./RelaxComponent.css";

class RelaxMessages extends Component {
    state = {
        editMode: false,
        formValues: { text: "Add message", author: "Someone" }
      };
  componentDidMount() {
    console.log("compo did mount", Number(this.props.match.params.id));
    this.props.loadRelaxMessages(this.props.match.params.id);
  }

  onChange = event => {
    console.log("onchange is aangeroepen", this.state);
    this.setState({
      formValues: {
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    console.log("pressed a butttton");
    event.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.submitRelaxMessage(this.state.formValues);
  };
  render() {
    return (
      <div>
        <RelaxMessageContainer
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          text={this.state.formValues.text}
        />
        <DrawRelaxMessages relaxmessages={this.props.relaxmessage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapstatetoprops", state.relaxmessages);
  return {
    relaxmessage: state.relaxmessages
  };
};

export default connect(
  mapStateToProps,
  {
    loadRelaxMessages,
    submitRelaxMessage
  }
)(RelaxMessages);
