export const appConstants={
  REACT_APP_BASE_URL: process.env.NODE_ENV === "development" ? "https://trail-api.test.vggdev.com" : window.env.appUrl, //check octopus

  SDGS:"sdgs",
  ALL:"all",
  INDICATORS:"indicators",
  PROGRAMS:"programs"
} 