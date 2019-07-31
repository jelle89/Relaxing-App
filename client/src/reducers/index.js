import { combineReducers } from "redux";
import relaxmessages from "./relaxmessages";
import stressmessages from "./stressmessages";

export default combineReducers({
  relaxmessages,
  stressmessages
});