import request from "superagent";

export const MESSAGES_FETCHED = "MESSAGES_FETCHED";
export const MESSAGES_ADDED = "MESSAGES_ADDED";

const baseUrl = "http://localhost:5000";

const messagesFetched = messages => ({
  type: MESSAGES_FETCHED,
  messages
});

const messagesAdded = messages => ({
  type: MESSAGES_ADDED,
  messages
});

export const submitMessage = (id, formValues) => dispatch => {
  console.log("action smc ", id);
  console.log("action smc ", formValues);
  request
    .post(`${baseUrl}/messages`)
    .send({ id: id, data: formValues })
    .then(response => {
      console.log("res", response);
      dispatch(messagesAdded(response.body));
    })
    .catch(console.error);
};

export const loadMessages = id => (dispatch, getState) => {
  if (getState().messages) return;

  request(`${baseUrl}/messages`)
    .then(response => {
      dispatch(messagesFetched(response.body));
    })
    .catch(console.error);
};