import { CREATE_PROJECT, GET_PROJECT, TEST_DISPATCH } from "../constants/Types";

const initialState = {
  projects: [
    {
      projectName: "Home Grown School Feeding",
      projectImage:
        "https://tdma.info/assets/uploads/2017/12/Using_sunlight_to_clean_water_Featured_Image-1.jpg",
      projectCode: "HGSF",
      projectLocation: "ng",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 3: true, 13: true },
      indicatorCheckBoxes: { 0: "Good Health", 2: "Food Security" },
    },
    {
      projectName: "World Reduced Inequalities",
      projectImage:
        "https://media.pri.org/s3fs-public/styles/open_graph/public/migration/PriMigrationsDamanticWordpressAttachmentsImagesMigration/www.theworld.org/wp-content/uploads/IMG_4297.jpg?itok=iB8n0R4j",
      projectCode: "FEC",
      projectLocation: "gh",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 12: true, 8: true },
      indicatorCheckBoxes: { 0: "Small Agriculture", 1: "Financial Literacy" },
    },
    {
      projectName: "National Woman Rights",
      projectImage:
        "https://politicalyouthnetwork.org/wp-content/uploads/2019/01/Womens-rights-are-human-rights.jpg",
      projectCode: "NWR",
      projectLocation: "ng",
      projectDescription:
        "National lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 5: true, 2: true },
      indicatorCheckBoxes: { 0: "Small Agriculture", 1: "Financial Literacy" },
    },
  ],
  indicator: ["a", "b", "c", "d", "e", "f", "c", "y"],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        indicator: [...state.indicator, action.payload.indicatorCheckBoxes],
      };
    default:
      return state;
  }
};
