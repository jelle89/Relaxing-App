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
import { submitMessage, loadMessages } from "../actions/messages";
import MessageContainer from "./messages/MessageContainer"
import DrawMessages from "./messages/DrawMessages"
import relax1 from "../images/relax1.png";
import relax2 from "../images/relax2.jpg";
import relax3 from "../images/relax3.png";
import audio2 from "../audio/relax1.mp3";

class Relax extends Component {
  state = {
    editMode: false,
    formValues: { text: "Add message", author: "Someone" }
  };

  componentDidMount() {
    console.log("compo did mount", Number(this.props.match.params.id));
    this.props.loadMessages(this.props.match.params.id);
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
    this.props.submitMessage(this.state.formValues);
  };
  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                A (not?) very relaxing app
              </Typography>
            </Toolbar>
          </AppBar>
        </React.Fragment>
        <Sky
          images={{
            0: relax1,
            1: relax2,
            2: relax3
          }}
          how={
            12
          } /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={90} /* time of the animation. Dfaults at 20s */
          size={"100px"} /* size of the rendered images. Defaults at 150px */
          background={"teal"} /* color of background. Defaults to none */
        />
        {/* <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl> */}
        <Sound
          url={audio2}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
          loop={true}
        />
        <MessageContainer
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          text={this.state.formValues.text}
        />
        <DrawMessages messages={this.props.message} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapstatetoprops", state.messages);
  return {
    message: state.messages
  };
};

export default connect(
  mapStateToProps,
  {
    loadMessages,
    submitMessage
  }
)(Relax);
