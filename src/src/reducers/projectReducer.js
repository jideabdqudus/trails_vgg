import {
  CREATE_PROJECT,
  GET_PROJECT,
  TEST_DISPATCH,
  GET_PROGRAMS,
} from "../constants/Types";

const initialState = {
  programs: [],
  awarded: null,
  disbursed: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
        loading: false,
      };
    case GET_PROJECT:
      return {
        ...state,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        ...action.payload,
        projects: [...state.projects, action.payload],
      };
    default:
      return state;
  }
};
