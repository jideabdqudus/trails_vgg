import {
  CREATE_PROJECT,
  GET_PROJECT,
  TEST_DISPATCH,
  GET_INDICATORS,
  PROJECT_ERROR,
  GET_PROGRAMS,
  PROGRAMS,
  GET_BUDGET_AND_BENEFICIARIES,
} from "../constants/Types";
import { message as alert, message } from "antd";
import { appHelpers } from "../appHelpers/appHelpers";
import {
  GET_BUDGET_AND_BENEFICIARIES as BAB,
  PROGRAMS as PR,
  GET_PROGRAMS as PROG,
} from "../Constants";
import axios from "axios";

// export const getPrograms = (token, service) => async (dispatch) => {
//   try {
//     const res = await service.getItems(PROG);
//     console.log("guy", res.data.data);
//     dispatch({
//       type: GET_PROGRAMS,
//       payload: res.data.data,
//     });
//     console.log("yasu",res.data.data)
//   } catch (err) {
//     dispatch({
//       type: GET_PROGRAMS,
//       payload: err.response,
//     });
//   }
// };

export const getProject = () => {
  return {
    type: GET_PROJECT,
  };
};

export const createProject = (project) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
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

export const getPrograms = (service) => async (dispatch) =>{
  try {
    const response = await service.getItems(PR)
    dispatch({
      type: PROGRAMS,
      payload: response.data.data
    })
    console.log("working",response.data.data)
  } catch (err) {
    dispatch({
      type: PROGRAMS,
      payload: {msg: err.response, status: err.response}
    })
  }
}
