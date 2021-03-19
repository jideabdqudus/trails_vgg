import {
  CREATE_PROJECT,
  GET_PROJECT,
  TEST_DISPATCH,
  GET_INDICATORS,
  PROJECT_ERROR,
  GET_PROGRAMS,
  GET_BUDGET_AND_BENEFICIARIES,
} from "../constants/Types";
import { message as alert, message } from "antd";
import { appHelpers } from "../appHelpers/appHelpers";
import { GET_BUDGET_AND_BENEFICIARIES as BAB } from "../Constants";
import axios from "axios";

export const getPrograms = (token, ServiceBase, Constants) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      accessToken: token,
    },
  };
  try {
    const res = await axios.get(
      "https://trail-api.test.vggdev.com/programs",
      config
    );
    // const res = await ServiceBase.getItems(Constants.PROGRAMS)
    dispatch({
      type: GET_PROGRAMS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: err.response,
    });
  }
};

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

//http://trail-api.test.vggdev.com/

/*{
  "data": {
    "totalbudget": 32.0,
    "totalbeneficiaries": 88
},
"message": "Total budget and beneficaries"
}*/
