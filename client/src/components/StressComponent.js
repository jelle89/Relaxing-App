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


class Stress extends Component {
  render() {

    return (
      
      <div>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
              A (not?) very relaxing website
              </Typography>
            </Toolbar>
          </AppBar>
        </React.Fragment>
        <Sky
          images={{
            0: stress1,
            1: stress2,
            2: stress3,
            3: stress4
          }}
          how={
            200
          } /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={2} /* time of the animation. Dfaults at 20s */
          size={"100px"} /* size of the rendered images. Defaults at 150px */
          background={"red"} /* color of background. Defaults to none */
        />
        {/* <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl> */}
        <Sound
      url={audio1}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      loop={true}
    />
     <Grid
    container
    spacing={0}
    align="center"
    justify="center"
    direction="column"
    
  >
    <div class="container">
  <div class="content">
    <a href="stressmessages">
      <div class="content-overlay"></div>
      <img class="content-image2" src="https://media0.giphy.com/media/Gdap1KQCiv5v2/giphy.gif?cid=790b76115d42c6e777636f57515e3059&rid=giphy.gif" id="stress"/>
      </a>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">Had enough?</h3>
        <p class="content-text" href="stressmessages">Click here to leave your thoughts</p>
        
   </div>
  </div>
</div>


</Grid>
    
    {/* <StressMessageContainer
          onChange={this.onChange}
          eventHandler={this.eventHandler}
          text={this.state.formValues.text}
        />
        <DrawStressMessages stressmessages={this.props.stressmessage} /> */}
      </div>
    );
  }
  
}

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
)(Stress);

