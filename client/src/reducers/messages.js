import { MESSAGES_FETCHED, MESSAGES_ADDED } from "../actions/messages";

export default (state = null, action = {}) => {
  console.log("messagesreducer", state, "messagesaction", action);
  switch (action.type) {
    case MESSAGES_FETCHED:
      return action.messages;
    case MESSAGES_ADDED:
      return state;

    default:
      return state;
  }
};