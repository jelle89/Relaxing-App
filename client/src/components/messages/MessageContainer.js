import React from "react";

export default function MessageContainer(props) {
  console.log(props, 'propsvanmessages')
  return (
    <form onSubmit={props.onSubmit}>
    
      <label>
        Message:
        <input
          type="text"
          name="text"
          onChange={props.onChange}
          value={props.text}
        />
      </label>
      <button onClick={props.onSubmit}>Submit</button>
    </form>
  );
}