import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  TextField
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
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

export default function relaxMessageContainer(props) {
  console.log(props, "propsvanrelaxmessages");
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
        <h4>Did the previous page help? If so, how did it help? If not, why not? What are you going to change today in order to help your current situation?</h4>

    <FormControl>
      <TextField
        type="text"
        aria-describedby="my-helper-text"
        name="text"
        onChange={props.onChange}
        value={props.text}
        variant="outlined"
      />
      <Button 
       type="submit"
       fullWidth
       variant="contained"
       color="primary"
       Message>
         Your feedback </Button>
    </FormControl>

      </div>
  );
}

{
  /* <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl> */
}

//   <form onSubmit={props.onSubmit}>

//   <label>
//     Message:
//     <input
//       type="text"
//       name="text"
//       onChange={props.onChange}
//       value={props.text}
//     />
//   </label>
//   <button onClick={props.onSubmit}>Submit</button>
// </form>

// <button onClick={props.onSubmit}>Submit</button>
