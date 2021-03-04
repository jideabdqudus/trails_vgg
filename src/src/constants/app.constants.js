export const appConstants={
  BASE_URL: process.env.NODE_ENV === "development" ? "http://trail-api.test.vggdev.com" : window.env.appUrl, //check octopus
} 