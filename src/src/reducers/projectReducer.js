import {
  CREATE_PROJECT,
  GET_PROJECT,
  TEST_DISPATCH,
  GET_PROGRAMS,
} from "../constants/Types";

const initialState = {
  projects: [
    {
      name: "Home Grown School Feeding",
      image:
        "https://tdma.info/assets/uploads/2017/12/Using_sunlight_to_clean_water_Featured_Image-1.jpg",
      code: "HGSF",
      projectLocation: "ng",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 3: true, 13: true },
      indicatorCheckBoxes: { 0: "Good Health", 2: "Food Security" },
      location: {
        active: true,
        description: "Aspen, CO, USA",
        formattedSuggestion: { mainText: "Aspen", secondaryText: "CO, USA" },
        id: undefined,
        index: 1,
        placeId: "ChIJfTxB93w5QIcRcvYseNxCK8E",
        types: (3)[("locality", "political", "geocode")],
      },
      mapCenter: { lat: 7.3775355, lng: 3.9470396 },
    },
    {
      name: "World Reduced Inequalities",
      image:
        "https://media.pri.org/s3fs-public/styles/open_graph/public/migration/PriMigrationsDamanticWordpressAttachmentsImagesMigration/www.theworld.org/wp-content/uploads/IMG_4297.jpg?itok=iB8n0R4j",
      code: "FEC",
      projectLocation: "gh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 12: true, 8: true },
      indicatorCheckBoxes: { 0: "Small Agriculture", 1: "Financial Literacy" },
      location: {
        active: true,
        description: "Ottawa, OT, CAD",
        formattedSuggestion: { mainText: "Aspen", secondaryText: "CO, USA" },
        id: undefined,
        index: 1,
        placeId: "ChIJfTxB93w5QIcRcvYseNxCK8E",
        types: (3)[("locality", "political", "geocode")],
      },
      mapCenter: { lat: 6.334986, lng: 5.6037465 },
    },
    {
      name: "National Woman Rights",
      image:
        "https://politicalyouthnetwork.org/wp-content/uploads/2019/01/Womens-rights-are-human-rights.jpg",
      code: "NWR",
      projectLocation: "ng",
      description:
        "National lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!",
      sdgCheckBoxes: { 5: true, 2: true },
      indicatorCheckBoxes: { 0: "Small Agriculture", 1: "Financial Literacy" },
      location: {
        active: true,
        description: "Accra, GH, Ghana",
        formattedSuggestion: { mainText: "Aspen", secondaryText: "CO, USA" },
        id: undefined,
        index: 1,
        placeId: "ChIJfTxB93w5QIcRcvYseNxCK8E",
        types: (3)[("locality", "political", "geocode")],
      },
      mapCenter: { lat: 47.3084488, lng: -122.2140121 },
    },
  ],
  awarded: null,
  disbursed: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRAMS:
      return {
        ...state,
        ...action.payload,
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
