import React, { Component } from "react";
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
import { FormControl, InputLabel, Input, FormHelperText } from "@material-ui/core";
import relax1 from "../images/relax1.png";
import relax2 from "../images/relax2.jpg";
import audio2 from "../audio/relax1.mp3"

class Relax extends Component {
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
            1: relax2
          }}
          how={
            10
          } /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={55} /* time of the animation. Dfaults at 20s */
          size={"100px"} /* size of the rendered images. Defaults at 150px */
          background={"teal"} /* color of background. Defaults to none */
        />
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <Sound
      url={audio2}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      loop={true}
    />
      </div>
    );
  }
}

export default Relax;
