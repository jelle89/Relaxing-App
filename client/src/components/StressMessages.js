import React, { Component } from "react";
import { connect } from "react-redux";
import Sky from "react-sky";
import Sound from "react-sound"
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
import { submitStressMessage, loadStressMessages } from "../actions/stressmessages";
import StressMessageContainer from "./messages/StressMessageContainer"
import DrawStressMessages from "./messages/DrawStressMessages"
import { FormControl, InputLabel, Input, FormHelperText } from "@material-ui/core";
import stress1 from "../images/stress1.jpg";
import stress2 from "../images/stress2.png";
import stress3 from "../images/stress3.png";
import stress4 from "../images/stress4.jpg";
import audio1 from "../audio/stress1.mp3"
import "./StressComponent.css";

class StressMessages extends Component {
    state = {
      editMode: false,
      formValues: { text: "Add message", author: "Someone" }
    };
  
    componentDidMount() {
      console.log("compo did mount", Number(this.props.match.params.id));
      this.props.loadStressMessages(this.props.match.params.id);
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
      this.props.submitStressMessage(this.state.formValues);
    };
    render() {
  
      return (
          <div>
               <StressMessageContainer
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          text={this.state.formValues.text}
        />
        <DrawStressMessages stressmessages={this.props.stressmessage} />
          </div>
      )}}

      const mapStateToProps = state => {
        console.log("mapstatetoprops", state.stressmessages);
        return {
          stressmessage: state.stressmessages
        };
      };
      
      export default connect(
        mapStateToProps,
        {
          loadStressMessages,
          submitStressMessage
        }
      )(StressMessages);
      