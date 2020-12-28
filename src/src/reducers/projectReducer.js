import { CREATE_PROJECT, GET_PROJECT, TEST_DISPATCH } from "../constants/Types";

const initialState = {
  projects: [
    {
      projectName: "Home Grown School Feeding",
      projectCode: "HGSF",
      projectLocation: "ng",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 3: true, 13: true },
      indicatorCheckBoxes: { 0: "Good Health", 2: "Food Security" },
    },
    {
      projectName: "World Reduced Inequalities",
      projectCode: "FEC",
      projectLocation: "gh",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 12: true, 8: true },
      indicatorCheckBoxes: { 0: "Small Agriculture", 1: "Financial Literacy" },
    },
    {
      projectName: "National Woman Rights",
      projectCode: "NWR",
      projectLocation: "ng",
      projectDescription:
        "National lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 5: true, 2: true },
      indicatorCheckBoxes: { 0: "Small Agriculture", 1: "Financial Literacy" },
    },
  ],
  sdg: [{}],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
      };
    case TEST_DISPATCH:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    default:
      return state;
  }
};
