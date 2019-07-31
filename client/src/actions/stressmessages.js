import request from "superagent";

export const STRESSMESSAGES_FETCHED = "STRESSMESSAGES_FETCHED";
export const STRESSMESSAGES_ADDED = "STRESSMESSAGES_ADDED";

const baseUrl = "http://localhost:5000";

const stressMessagesFetched = stressmessages => ({
  type: STRESSMESSAGES_FETCHED,
  stressmessages
});

const stressMessagesAdded = stressmessages => ({
  type: STRESSMESSAGES_ADDED,
  stressmessages
});

export const submitStressMessage = (id, formValues) => dispatch => {
  console.log("action smc ", id);
  console.log("action smc ", formValues);
  request
    .post(`${baseUrl}/stressmessages`)
    .send({ id: id, data: formValues })
    .then(response => {
      console.log("res", response);
      dispatch(stressMessagesAdded(response.body));
    })
    .catch(console.error);
};

export const loadStressMessages = id => (dispatch, getState) => {
  if (getState().stressmessages) return;

  request(`${baseUrl}/stressmessages`)
    .then(response => {
      dispatch(stressMessagesFetched(response.body));
    })
    .catch(console.error);
};