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
      activeMarker: {
        active: true,
        description: "Aspen, CO, USA",
        formattedSuggestion: { mainText: "Aspen", secondaryText: "CO, USA" },
        id: undefined,
        index: 1,
        placeId: "ChIJfTxB93w5QIcRcvYseNxCK8E",
        types: (3)[("locality", "political", "geocode")],
      },
      projectBanner: {
        file: {
          uid: "rc-upload-1611946216843-9",
          lastModified: 1523649214000,
          lastModifiedDate: "2018-04-13T19:53:34.000Z",
          name: "AirBrush_20180413205334.jpg",
          size: 1297343,
          type: "image/jpeg",
          percent: 100,
        },
        fileList: [],
      },
      mapCenter: { lat: 7.3775355, lng: 3.9470396 },
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
      activeMarker: {
        active: true,
        description: "Ottawa, OT, CAD",
        formattedSuggestion: { mainText: "Aspen", secondaryText: "CO, USA" },
        id: undefined,
        index: 1,
        placeId: "ChIJfTxB93w5QIcRcvYseNxCK8E",
        types: (3)[("locality", "political", "geocode")],
      },
      projectBanner: {
        file: {
          uid: "rc-upload-1611946216843-9",
          lastModified: 1523649214000,
          lastModifiedDate: "2018-04-13T19:53:34.000Z",
          name: "AirBrush_20180413205334.jpg",
          size: 1297343,
          type: "image/jpeg",
          percent: 100,
        },
        fileList: [],
      },
      mapCenter: { lat: 6.334986, lng: 5.6037465 },
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
      activeMarker: {
        active: true,
        description: "Accra, GH, Ghana",
        formattedSuggestion: { mainText: "Aspen", secondaryText: "CO, USA" },
        id: undefined,
        index: 1,
        placeId: "ChIJfTxB93w5QIcRcvYseNxCK8E",
        types: (3)[("locality", "political", "geocode")],
      },
      projectBanner: {
        file: {
          uid: "rc-upload-1611946216843-9",
          lastModified: 1523649214000,
          lastModifiedDate: "2018-04-13T19:53:34.000Z",
          name: "AirBrush_20180413205334.jpg",
          size: 1297343,
          type: "image/jpeg",
          percent: 100,
        },
        fileList: [],
      },
      mapCenter: { lat: 47.3084488, lng: -122.2140121 },
    },
  ],
  indicator: ["a", "b", "c", "d"],
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
