import swal from "sweetalert2";
import { toast } from "react-toastify";

export const appHelpers = {
  returnLabelsforDonut: (arr) => {
    let label = [];
    for (let i in arr) {
      label.push(arr[i][0]);
    }
    return label;
  },
  alertError: (message, duration) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: duration,
    });
  },
  toCapitalLetters: (value) => {
    if (typeof value === "string") {
      return value.toLocaleUpperCase();
    }
  },
  formatLargeNumbers: (x) => {
    if (isNaN(x)) return x;

    if (x < 9999) {
      return x;
    }

    if (x < 1000000) {
      return Math.round(x / 1000) + "K";
    }
    if (x < 10000000) {
      return (x / 1000000).toFixed(2) + "M";
    }

    if (x < 1000000000) {
      return Math.round(x / 1000000) + "M";
    }

    if (x < 1000000000000) {
      return Math.round(x / 1000000000) + "B";
    }

    return "1T+";
  },

  returnIndicatorsOnly : (indicators)=>{
    let ind =[]
    let f = indicators.filter((o) => o.status === true)
    for(let i in f){
      ind.push(parseInt(f[i].id))
    }
    return ind;
  },
  countProjectIndicators : (sdgs) =>{
    let projectIndicators = [];
    for(let i in sdgs){
      const indicators = sdgs[i].indicators
      projectIndicators.push(indicators)
    }
    return projectIndicators.length
  },
  formatSdgsIndicatorsPayload : (finalSdgChecks) =>{
    let sdgs = []
    for(let i in finalSdgChecks){
      sdgs.push({
        indicators:finalSdgChecks[i].indicators,
        id:finalSdgChecks[i].id
      })
    }
    return sdgs
  },
  returnSelectedSdgs: (sdgCheckBoxes, sdgDump) => {
    Object.entries(sdgCheckBoxes).forEach(([key, value]) => {
      if (value === false) {
        delete sdgCheckBoxes[key];
      }
    });
    return Object.keys(sdgCheckBoxes).map((id) =>
      sdgDump.find((sdg) => sdg.id === id)
    );
  },

  addDots: (value) => {
    let valueCopy = value.substring(0, 20);
    if (value.length > 15) return (valueCopy += "...");
    else return value;
  },

  returnIndicators: (sdgCheckBoxes, sdgDump) => {
    const filtered = appHelpers.returnSelectedSdgs(sdgCheckBoxes, sdgDump);
    const returnedIndicators = [];
    filtered.map((filteredItem, index) => {
      filteredItem.indicators.map((item, index) => {
        returnedIndicators.push({
          value: item.description,
          status: false,
          sdgId: filteredItem.id,
        });
      });
    });
    //console.log("asjaskj",filtered)
    return returnedIndicators;
  },

  indicatorSummary: (sdgChecks) => {
    const returnedIndicators = [];

    sdgChecks.map((item, index) => {
      item.indicators.map((indicator, indicatorIndex) => {
        if (indicator.status === true) {
          returnedIndicators.push({
            description: indicator.description,
            SdgId: item.id,
          });
        }
      });
    });
    return returnedIndicators;
  },

  formatApiMapData: (apiGeoData) => {
    const returnedLocations = [];
    let count = 0;

    apiGeoData.map((geolocation, geolocationIndex) => {
      returnedLocations.push({
        id: count++,
        shelter: geolocation.Area,
        latitude: parseFloat(geolocation.Latitude),
        longitude: parseFloat(geolocation.Longitude),
      });
    });
    return returnedLocations;
  },
  formatMapData: (dashboardData) => {
    const returnedLocations = [];
    let count = 0;

    dashboardData.map((item, index) => {
      item.GeoLocations.map((geolocation, geolocationIndex) => {
        returnedLocations.push({
          id: count++,
          latitude: parseFloat(geolocation.Latitude),
          longitude: parseFloat(geolocation.Longitude),
        });
      });
    });
    return returnedLocations;
  },

  returnApiMapDefaultCenter: (apiGeoData) => {
    const defautlCenter = [];
    let count = 0;

    apiGeoData.map((geolocation, geolocationIndex) => {
      defautlCenter.push({
        lat: parseFloat(geolocation.Latitude),
        lng: parseFloat(geolocation.Longitude),
      });
    });
    return defautlCenter[0];
  },

  returnMapDefaultCenter: (dashboardData) => {
    const defautlCenter = [];
    let count = 0;

    dashboardData.map((item, index) => {
      item.GeoLocations.map((geolocation, geolocationIndex) => {
        defautlCenter.push({
          lat: parseFloat(geolocation.Latitude),
          lng: parseFloat(geolocation.Longitude),
        });
      });
    });
    return defautlCenter[0];
  },

  containsObject: (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
        return true;
      }
    }

    return false;
  },

  filterSdgById: (id, allIndicators) => {
    let filtered = allIndicators.filter((item) => {
      return item.sdgId === id;
    });
    return filtered;
  },
  returnSdgNameById: (id, sdgDump) => {
    let filtered = sdgDump.filter((item) => {
      return item.id === id;
    });
    const filteredObj = Object.assign({}, ...filtered);
    return filteredObj.description;
  },
  setIndicatorCheckBoxes: (indicators, index) => {
    let isTrue = false;
    Object.keys(indicators).forEach(function (key) {
      isTrue = key === index ? true : false;
    });
    return isTrue;
  },
  validateImpactFormOne: (context) => {
    let _errs_ = {};
    let formValid = true;
    if (context.state.name === "") {
      _errs_["name"] = true;
      formValid = false;
    }
    if (context.state.code === "") {
      _errs_["code"] = true;
      formValid = false;
    }
    if (context.state.description === "") {
      _errs_["description"] = true;
      formValid = false;
    }
    if (context.state.projectLocation === "") {
      _errs_["projectLocation"] = true;
      formValid = false;
    }

    context.setState({ formOneErrors: _errs_ });
    return formValid;
  },

  validateImpactFormTwo: (context) => {
    let _errs_ = {};
    let formValid = true;
    if (Object.keys(context.state.sdgCheckBoxes).length === 0) {
      _errs_["sdg"] = true;
      formValid = false;
    }
    context.setState({ formTwoErrors: _errs_ });
    return formValid;
  },
  validateImpactFormThree: (context) => {
    let _errs_ = {};
    let formValid = true;
    if (Object.keys(context.state.indicatorCheckBoxes).length === 0) {
      _errs_["indicator"] = true;
      formValid = false;
    }
    context.setState({ formThreeErrors: _errs_ });
    return formValid;
  },

  failedRequestAlert: (message, timer = 2000) => {
    swal.fire({
      titleText: "Sorry!",
      text: message,
      icon: "error",
      timer: timer,
      showConfirmButton: true,
    });
  },

  canceledRequestAlert: (message, timer = 2000) => {
    swal.fire({
      titleText: "Too bad",
      text: message,
      icon: "error",
      timer: timer,
      showConfirmButton: true,
    });
  },

  successMessageAlert: (message, timer = 2000) => {
    swal.fire({
      titleText: "Success!",
      text: message,
      icon: "success",
      timer: timer,
      showConfirmButton: true,
    });
  },
};
