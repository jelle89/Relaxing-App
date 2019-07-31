import request from "superagent";

export const RELAXMESSAGES_FETCHED = "RELAXMESSAGES_FETCHED";
export const RELAXMESSAGES_ADDED = "RELAXMESSAGES_ADDED";

const baseUrl = "http://localhost:5000";

const relaxMessagesFetched = relaxmessages => ({
  type: RELAXMESSAGES_FETCHED,
  relaxmessages
});

const relaxMessagesAdded = relaxmessages => ({
  type: RELAXMESSAGES_ADDED,
  relaxmessages
});

export const submitRelaxMessage = (id, formValues) => dispatch => {
  console.log("action smc ", id);
  console.log("action smc ", formValues);
  request
    .post(`${baseUrl}/relaxmessages`)
    .send({ id: id, data: formValues })
    .then(response => {
      console.log("res", response);
      dispatch(relaxMessagesAdded(response.body));
    })
    .catch(console.error);
};

export const loadRelaxMessages = id => (dispatch, getState) => {
  if (getState().relaxmessages) return;

  request(`${baseUrl}/relaxmessages`)
    .then(response => {
      dispatch(relaxMessagesFetched(response.body));
    })
    .catch(console.error);
};