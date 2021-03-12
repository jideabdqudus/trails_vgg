import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_SESS
} from "../constants/Types";

const initialState = {
  token: localStorage.getItem("token"),
  registerSuccess: false,
  isAuthenticated: null,
  loading: true,
  user: {},
  data: {},
  programs:[]
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        registerSuccess: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.data.accessToken);
      return {
        ...state,
        user: action.payload.data,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        token: action.payload.data.accessToken
      };

      case CLEAR_SESS:
        localStorage.removeItem("token");
        return {
          ...state,
          user: {},
          isAuthenticated: false,
          loading: false,
          token: null
        };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
export default auth