import { REMOVE_ALERT, SET_ALERT } from "../constants/Types";

//Set Alert
export const setAlert = (msg, type, timeout = 5000) => (dispatch) => {
  const id = Date.now();
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
