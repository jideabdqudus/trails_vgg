import {
  CREATE_PROJECT,
  GET_PROJECT,
  TEST_DISPATCH,
  GET_INDICATORS,
  PROJECT_ERROR,
  GET_PROGRAMS,
} from "../constants/Types";
import axios from "axios";

export const getPrograms = (token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      accessToken: token,
    },
  };
  try {
    const res = await axios.get(
      "http://trail-api.test.vggdev.com/programs",
      config
    );
    dispatch({
      type: GET_PROGRAMS,
      payload: res.data,
    });
    console.log("Sameerah", res.data);
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




