import swal from "sweetalert2";

export const appHelpers = {
  returnLabelsforDonut: (arr) => {
    let label = [];
    for (let i in arr) {
      label.push(arr[i][0]);
    }
    return label;
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

  returnSelectedSdgs: (sdgCheckBoxes, sdgDump) => {
    Object.entries(sdgCheckBoxes).forEach(([key, value]) => {
      if (value === false) {
        delete sdgCheckBoxes[key];
      }
    });
    return Object.keys(sdgCheckBoxes).map((id) =>
      sdgDump.find((sdg) => sdg.Number === id)
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
      filteredItem.Indicators.map((item, index) => {
        returnedIndicators.push({
          value: item.Text,
          status: false,
          sdgId: filteredItem.Number,
        });
      });
    });

    return returnedIndicators;
  },

  indicatorSummary: (sdgChecks) => {
    const returnedIndicators = [];

    sdgChecks.map((item, index) => {
      item.Indicators.map((indicator, indicatorIndex) => {
        if (indicator.Status === true) {
          returnedIndicators.push({
            Text: indicator.Text,
            SdgId: item.Number,
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
      if (parseInt(list[i].Number) === parseInt(obj.Number)) {
        return true;
      }
    }

    return false;
  },
  filterSdgById: (id, allIndicators) => {
    let filtered = allIndicators.filter((item) => {
      return parseInt(item.sdgId) === parseInt(id);
    });
    return filtered;
  },
  returnSdgNameById: (id, sdgDump) => {
    let filtered = sdgDump.filter((item) => {
      return parseInt(item.Number) === parseInt(id);
    });
    const filteredObj = Object.assign({}, ...filtered);
    return filteredObj.Text;
  },
  setIndicatorCheckBoxes: (indicators, index) => {
    let isTrue = false;
    Object.keys(indicators).forEach(function (key) {
      isTrue = parseInt(key) === index ? true : false;
    });
    return isTrue;
  },
  validateImpactFormOne: (context) => {
    let _errs_ = {};
    let formValid = true;
    if (context.state.projectName === "") {
      _errs_["projectName"] = true;
      formValid = false;
    }
    if (context.state.projectCode === "") {
      _errs_["projectCode"] = true;
      formValid = false;
    }
    if (context.state.projectDescription === "") {
      _errs_["projectDescription"] = true;
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
      titleText: "Succes!",
      text: message,
      icon: "success",
      timer: timer,
      showConfirmButton: true,
    });
  },
};
