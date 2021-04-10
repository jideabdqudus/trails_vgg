import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/Types";

//Load User

export const loadUser = () => async (dispatch) => {
  // setAuthToken(localStorage.token);
  // try {
  //   const res = await axios.get("http://trail-api.test.vggdev.com/user");
  //   dispatch({
  //     type: USER_LOADED,
  //     payload: res.data,
  //   });
  // } catch (error) {
  //   dispatch({
  //     type: AUTH_ERROR,
  //     payload: error.response,
  //   });
  // }
};

//Register User

export const register = (formData, ServiceBase, Constants) => async (
  dispatch
) => {
  try {
    const res = await ServiceBase.createItemV1(formData, Constants.USER);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (res) {
    dispatch({
      type: REGISTER_FAIL,
      payload: res,
    });
  }
};

// Login User

export const login = (formData, ServiceBase, Constants) => async (dispatch) => {
  try {
    // const res = await axios.post(
    //   "https://trail-api.test.vggdev.com/authenticate/",
    //   formData,
    //   config
    // );
    const res = await ServiceBase.createItemV1(
      formData,
      Constants.AUTHENTICATE
    );
    localStorage.setItem(
      "TRAIL_TOKEN",
      JSON.stringify(res.data.data.accessToken)
    );
    localStorage.setItem("TRAIL_USER", JSON.stringify(res.data.data));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response,
    });
  }
};

//Logout
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
