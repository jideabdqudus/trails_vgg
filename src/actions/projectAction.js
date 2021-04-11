import {
  CREATE_PROJECT,
  GET_PROJECT,
  PROJECT_ERROR,
  PROGRAMS,
  GET_BUDGET_AND_BENEFICIARIES,
} from "../constants/Types";
import {
  GET_BUDGET_AND_BENEFICIARIES as BAB,
  PROGRAMS as PR,
} from "../Constants";

export const getProject = () => {
  return {
    type: GET_PROJECT,
  };
};

export const createProject = (project) => async (dispatch) => {
  try {
    // const res = await axios.post(
    //   "/api/plans",
    //   project,
    //   config
    // );
    dispatch({
      type: CREATE_PROJECT,
      payload: project,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};

export const getBudgetandBeneficiaries = (service) => async (dispatch) => {
  try {
    const response = await service.getItems(BAB);
    const { data } = response.data;
    dispatch({
      type: GET_BUDGET_AND_BENEFICIARIES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_BUDGET_AND_BENEFICIARIES,
      payload: { msg: err.response, status: err.response },
    });
  }
};

export const getPrograms = (service) => async (dispatch) => {
  try {
    const response = await service.getItems(PR);
    dispatch({
      type: PROGRAMS,
      payload: response.data.data,
    });
  } catch (err) {
    dispatch({
      type: PROGRAMS,
      payload: { msg: err.response, status: err.response },
    });
  }
};
