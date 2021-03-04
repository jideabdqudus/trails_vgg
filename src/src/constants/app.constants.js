export const appConstants={
  REACT_APP_BASE_URL: process.env.NODE_ENV === "development" ? "http://trail-api.test.vggdev.com" : window.env.appUrl, //check octopus
} 