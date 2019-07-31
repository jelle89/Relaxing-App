import { RELAXMESSAGES_FETCHED, RELAXMESSAGES_ADDED } from "../actions/relaxmessages";

export default (state = null, action = {}) => {
  console.log("relaxmessagesreducer", state, "relaxmessagesaction", action);
  switch (action.type) {
    case RELAXMESSAGES_FETCHED:
      return action.relaxmessages;
    case RELAXMESSAGES_ADDED:
      return state;

    default:
      return state;
  }
};