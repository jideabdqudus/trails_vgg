import {
  CREATE_PROJECT,
  GET_PROJECT,
  TEST_DISPATCH,
  GET_INDICATORS,
  PROJECT_ERROR,
} from "../constants/Types";
import axios from "axios";

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
    const res = await axios.post(
      "http://trail-api.test.vggdev.com/programs",
      project,
      config
    );
    dispatch({
      type: CREATE_PROJECT,
      payload: project,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
