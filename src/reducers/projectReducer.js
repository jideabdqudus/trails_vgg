import {
  CREATE_PROJECT,
  GET_PROJECT,
  GET_BUDGET_AND_BENEFICIARIES,
  PROGRAMS
} from "../constants/Types";

const initialState = {
  programs: [],
  awarded: null,
  disbursed: null,
  loading: false,
  totalbudget: "",
  totalbeneficiaries: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case PROGRAMS:
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
    case GET_BUDGET_AND_BENEFICIARIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
