import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";

export default function stressMessageContainer(props) {
  console.log(props, "propsvanstressmessages");
  return (
    <div>
    <FormControl>
      <InputLabel htmlFor="text">Enter your stress message here</InputLabel>
      <Input
        type="text"
        aria-describedby="my-helper-text"
        name="text"
        onChange={props.onChange}
        value={props.text}
      />
      <button onClick={props.onSubmit}>Make it a nice one!</button>


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
