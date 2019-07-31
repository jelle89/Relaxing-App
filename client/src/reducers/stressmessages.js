import { STRESSMESSAGES_FETCHED, STRESSMESSAGES_ADDED } from "../actions/stressmessages";

export default (state = null, action = {}) => {
  console.log("stressmessagesreducer", state, "stressmessagesaction", action);
  switch (action.type) {
    case STRESSMESSAGES_FETCHED:
      return action.stressmessages;
    case STRESSMESSAGES_ADDED:
      return state;

    default:
      return state;
  }
};