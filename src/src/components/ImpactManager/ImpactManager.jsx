import React from "react";
import Aux from "../hocs/_Aux";
import { Button } from "@material-ui/core";
import { withStore } from "@spyna/react-store";
import { Row, Col, Card, Form, Divider } from "antd";
import ImpactManagerForm1 from "./ImpactManagerForm1";
import ImpactManagerForm2 from "./ImpactManagerForm2";
import ImpactManagerForm3 from "./ImpactManagerForm3";
import ImpactManagerSummary from "./ImpactManagerSummary";
import { appHelpers } from "../../appHelpers/appHelpers";
//import { sdgDump } from "./sdgDump";
import "./index.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { createProject } from "../../actions/projectAction";
import { useDropzone } from "react-dropzone";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import axios from "axios";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { appConstants } from "../../constants/app.constants";
import CustomButton from "../CustomButton/CustomButton";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const { Meta } = Card;

// const locationsEnum = [
//   { label: "Nigeria", value: "ng" },
//   { label: "Ghana", value: "gh" },
// ];

const CardTitleForm1 = (
  <h1 style={{ fontSize: "20px", fontWeight: "normal", margin: 0 }}>
    Create your custom impact
  </h1>
);

const CardTitleForm3 = (
  <h1 style={{ fontSize: "20px", fontWeight: "normal", margin: 0 }}>
    Select Indicators
  </h1>
);

const CardTitleForm2 = (
  <h1 style={{ fontSize: "25px", fontWeight: "normal", margin: 0 }}>
    Select the Sustainable Development Goals for this programme
  </h1>
);

class ImpactManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createBtn: (
        <span>
          Create Project <i className="fa fa-angle-right" />{" "}
        </span>
      ),
      sdgDump: "",
      name: "",
      code: "",
      programmeLocation: "",
      description: "",
      programmePlaces: "",
      image: {},
      impactManagerFormOne: true,
      impactManagerFormTwo: false,
      impactManagerFormThree: false,
      impactManagerSummary: false,
      sdgCheckBoxes: {},
      sdgChecks: [],
      indicatorCheckBoxes: {},
      theIndicators: [],
      alert: null,
      allIndicators: null,
      mySdg: [],
      creating:false,
      indicators: [
        {
          id: 1,
          description: "No Poverty",
        },
        {
          id: 2,
          description: "No Hunger",
        },
      ],
      formOneErrors: {
        name: false,
        description: false,
        // projectLocation: false,
        programmeLocation: false,
        code: false,
        programmePlaces: "",
        image: false,
      },
      formTwoErrors: {
        sdg: false,
      },
      formThreeErrors: {
        indicator: false,
      },
      imageData:null,
      // for google map places autocomplete
      address: "",
      showingInfoWindow: false,
      location: {},
      selectedPlace: {},
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375,
      },
    };
    this.createProject = this.createProject.bind(this);
    this.cancelProject = this.cancelProject.bind(this);
  }

  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accessToken: this.props.auth.data.accessToken,
      },
    };

    axios
      .get("http://trail-api.test.vggdev.com/sdgs/all/indicators", config)
      .then((res) => {
        const sdgDump = res.data.data;
        this.setState({ sdgDump });
      });
  }

  handleChangePlace = (address) => {
    this.setState({ address });
  };

  handleSelectPlace = (address, selectedPlace, location) => {
    this.setState({ address, selectedPlace, location });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  normFile = (e) => {
    
    this.setState({ image: e.fileList[0].thumbUrl ,imageData:e.file});
    if (Array.isArray(e)) {
      return e.fileList[0].thumbUrl;
    }
    return e.fileList[0].thumbUrl;
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelectChange = (input) => ({ target: { value } }) => {
    this.setState({ [input]: value });
  };

  openImageManagerFormTwo = () => {
    if (appHelpers.validateImpactFormOne(this)) {
      this.setState({
        impactManagerFormOne: false,
        impactManagerFormTwo: true,
      });
      const impactManager = {
        name: this.state.name,
        code: this.state.code,
        description: this.state.description,
        // projectLocation: this.state.projectLocation,
        programmeLocation: this.state.programmeLocation,
        image: this.state.image,
        programmePlaces: this.state.programmePlaces,
        sdgs: [],
        indicators: [],
      };
    } else {
      console.log("some fields are missing");
    }
  };

  openImageManagerFormThree = (sdgCheckBoxes, sdgNum) => {
    if (sdgCheckBoxes[sdgNum] !== true) {
      this.setState({
        impactManagerFormOne: false,
        impactManagerFormTwo: true,
        impactManagerFormThree: false,
      });
    }
    if (appHelpers.validateImpactFormTwo(this)) {
      this.setState({
        impactManagerFormOne: false,
        impactManagerFormTwo: false,
        impactManagerFormThree: true,
      });
    } else {
      appHelpers.failedRequestAlert("Select at least One SDG");
    }
  };

  openImpactManagerSummary = () => {
    if (appHelpers.validateImpactFormThree(this)) {
      this.setState({
        impactManagerFormTwo: false,
        impactManagerFormThree: false,
        impactManagerSummary: true,
      });
    } else {
      appHelpers.failedRequestAlert("Please Select at least One Indicator");
      this.setState({
        impactManagerFormTwo: false,
        impactManagerFormThree: false,
        impactManagerSummary: true,
      });
    }
  };

  createProject() {
    const indicatorStrings = [];
    this.setState({creating:true})
    const {
      name,
      description,
      code,
      mySdg,
      sdgCheckBoxes,
      indicatorCheckBoxes,
      image,
      location,
      mapCenter,imageData
    } = this.state;
    const payload = {
      name,
      description,
      code,
      image,
      location,
      mapCenter,
      sdgCheckBoxes,
      mySdg,
      indicatorCheckBoxes,
    };
    // this.props.createProject(payload);
    // appHelpers.successMessageAlert("Programme Successfully Created");
    const config = {
      headers: {
        "Content-Type": "application/json",
        accessToken: this.props.auth.data.accessToken,
      },
    };
    let apiPayload = new FormData();
    apiPayload.append("name", name);
    apiPayload.append("description", description);
    apiPayload.append("code", code);
    apiPayload.append("image", imageData);
    apiPayload.append("image", imageData);

    // not yet done

     axios.post(
      `http://trail-api.test.vggdev.com/${appConstants.PROGRAMS}`,
      config
    ,apiPayload);
    console.log(payload);
  }

  cancelProject() {
    appHelpers.canceledRequestAlert("Project Cancelled!");
    window.location.reload();
  }

  goBack = () => {
    this.setState({ impactManagerFormOne: true, impactManagerFormTwo: false });
  };

  goBackTwo = () => {
    this.setState({
      impactManagerFormTwo: true,
      impactManagerFormThree: false,
    });
  };

  handleCheckboxChange = (
    indicatorValue,
    e,
    indicatorIndex,
    sdgIndex,
    indicatorID
  ) => {
    const { allIndicators, sdgChecks } = this.state;
    const newIndicators = allIndicators.map((indicator, id) => {
      if (indicatorIndex !== id) return indicator;
      return {
        ...indicator,
        status: e.target.checked,
      };
    });

    const newSdgChecks = sdgChecks.map((q, i) =>
      q.id === sdgIndex
        ? {
            ...q,
            indicators: q.indicators.map((o, i) =>
              i === indicatorIndex
                ? {
                    ...o,
                    status: e.target.checked,
                  }
                : o
            ),
          }
        : q
    );
    this.setState({
      indicatorCheckBoxes: {
        ...this.state.indicatorCheckBoxes,
        [indicatorID]: indicatorValue,
      },
      allIndicators: newIndicators,
      sdgChecks: newSdgChecks,
    });
  };

  updateSvgState = (sdg) => {
    const { sdgChecks, sdgDump } = this.state;

    let filtered = sdgDump.filter((item) => {
      return parseInt(item.id) === parseInt(sdg);
    });
    const obj = Object.assign({}, ...filtered);
    const svgExist = appHelpers.containsObject(obj, sdgChecks);
    if (svgExist === true) {
      this.setState({
        sdgCheckBoxes: {
          ...this.state.sdgCheckBoxes,
          [sdg]: !this.state.sdgCheckBoxes[sdg],
        },
      });
      this.setState((prevState) => ({
        sdgChecks: prevState.sdgChecks.filter((SDG) => SDG.id !== obj.id),
      }));
    } else {
      this.setState(
        {
          sdgCheckBoxes: {
            ...this.state.sdgCheckBoxes,
            [sdg]: !this.state.sdgCheckBoxes[sdg],
          },
          sdgChecks: [...this.state.sdgChecks, Object.assign({}, ...filtered)],
        },
        () => {
          //
          this.setState({
            allIndicators: appHelpers.returnIndicators(
              this.state.sdgCheckBoxes,
              sdgDump
            ),
          });
        }
      );
    }
  };

  handleSdgBoxChange = (sdgNum, event) => {
    this.updateSvgState(sdgNum);
  };

  editProjectProfile = () => {
    this.setState({
      impactManagerSummary: false,
      impactManagerFormOne: true,
      impactManagerFormTwo: false,
      impactManagerFormThree: false,
    });
  };
  editSdgGoals = () => {
    this.setState({
      impactManagerSummary: false,
      impactManagerFormOne: false,
      impactManagerFormTwo: true,
      impactManagerFormThree: false,
    });
  };
  editProjectIndicators = () => {
    this.setState({
      impactManagerSummary: false,
      impactManagerFormOne: false,
      impactManagerFormTwo: false,
      impactManagerFormThree: true,
    });
  };

  render() {
    //this.props.project.projects
    const { projects } = this.props.project;
    const {
      description,
      code,
      name,
      //projectLocation,
      programmeLocation,
      programmePlaces,
      image,
      impactManagerFormOne,
      impactManagerFormTwo,
      impactManagerFormThree,
      impactManagerSummary,
      sdgCheckBoxes,
      indicators,
      indicatorCheckBoxes,
      allIndicators,
      formOneErrors,
      formTwoErrors,
      sdgDump,
      sdgChecks,
      createBtn,
      creating
    } = this.state;
    return (
      <Aux>
        <div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {" "}
            <div>
              {/* Page One */}
              {impactManagerFormOne && (
                <Card>
                  <Meta
                    title={CardTitleForm1}
                    description="Design your own impact profile based on your programme priorities and needs"
                  />
                  <Divider />
                  <ImpactManagerForm1
                    description={description}
                    name={name}
                    code={code}
                    image={image}
                    programmePlaces={programmePlaces}
                    programmeLocation={programmeLocation}
                    // projectLocation={projectLocation}
                    handleInputChange={this.handleInputChange}
                    handleSelectChange={this.handleSelectChange}
                    handleBannerChange={this.handleBannerChange}
                    normFile={this.normFile}
                    formOneErrors={formOneErrors}
                    // locationsEnum={locationsEnum}
                    address={this.state.address}
                    handleChangePlace={this.handleChangePlace}
                    handleSelectPlace={this.handleSelectPlace}
                  />
                  <br />
                  <Button
                    size="large"
                    variant="contained"
                    onClick={this.openImageManagerFormTwo}
                    style={{
                      backgroundColor: "#53D1BE",
                      color: "white",
                      borderRadius: "2rem",
                      textTransform: "none",
                      boxShadow: "none",
                      float: "right",
                    }}
                  >
                    Save & Continue
                  </Button>
                </Card>
              )}
              {/* Page Two */}
              {impactManagerFormTwo && (
                <Card title={CardTitleForm2}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {" "}
                  </div>
                  <div
                    style={{
                      backgroundColor: "#53d1be1a",
                      paddingLeft: ".5rem",
                      paddingBottom: ".5rem",
                      paddingTop: ".5rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "small",
                        marginBottom: "0rem",
                      }}
                    >
                      First, select the Sustainable Development Goals (SDGs).
                    </p>
                    <p
                      style={{
                        fontSize: "small",
                        marginBottom: "0rem",
                      }}
                    >
                      Next, further specify preferred Indicators that best match
                      your project goals.
                    </p>
                    <p
                      style={{
                        fontSize: "small",
                        marginBottom: "0rem",
                      }}
                    >
                      Now your priorities are complete. Click Save & View
                      Questions.
                    </p>
                  </div>
                  <ImpactManagerForm2
                    handleInputChange={this.handleInputChange}
                    handleSdgBoxChange={this.handleSdgBoxChange}
                    sdgCheckBoxes={sdgCheckBoxes}
                    formTwoErrors={formTwoErrors}
                    sdgDump={sdgDump}
                    {...this.props}
                  />

                  <br />

                  <Button
                    size="large"
                    variant="contained"
                    onClick={this.goBack}
                    style={{
                      backgroundColor: "white",
                      color: "#53D1BE",
                      borderRadius: "2rem",
                      textTransform: "none",
                      boxShadow: "none",
                      borderColor: "#53D1BE",
                    }}
                  >
                    <ArrowLeftOutlined />
                    {"  "}Back
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={this.openImageManagerFormThree}
                    style={{
                      backgroundColor: "#53D1BE",
                      color: "white",
                      borderRadius: "2rem",
                      textTransform: "none",
                      boxShadow: "none",
                      float: "right",
                    }}
                  >
                    Save & Continue
                  </Button>
                </Card>
              )}
              {impactManagerFormThree && (
                <Card title={CardTitleForm3}>
                  <ImpactManagerForm3
                    handleCheckboxChange={this.handleCheckboxChange}
                    sdgCheckBoxes={sdgCheckBoxes}
                    indicators={indicators}
                    indicatorCheckBoxes={indicatorCheckBoxes}
                    allIndicators={allIndicators}
                    sdgDump={sdgDump}
                    sdgChecks={sdgChecks}
                  />

                  <br />

                  <Button
                    size="large"
                    variant="contained"
                    onClick={this.goBackTwo}
                    style={{
                      backgroundColor: "white",
                      color: "#53D1BE",
                      borderRadius: "2rem",
                      textTransform: "none",
                      boxShadow: "none",
                      borderColor: "#53D1BE",
                    }}
                  >
                    <ArrowLeftOutlined />
                    {"  "}Back
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={this.openImpactManagerSummary}
                    style={{
                      backgroundColor: "#53D1BE",
                      color: "white",
                      borderRadius: "2rem",
                      textTransform: "none",
                      boxShadow: "none",
                      float: "right",
                    }}
                  >
                    Save & View Answers
                  </Button>

                  {this.state.alert}
                </Card>
              )}

              {impactManagerSummary && (
                <div>
                  <ImpactManagerSummary
                    {...this.state}
                    {...this.props}
                    editProjectProfileCallback={this.editProjectProfile}
                    editSdgGoalsCallback={this.editSdgGoals}
                    indicatorCheckBoxes={indicatorCheckBoxes}
                    editProjectIndicatorsCallback={this.editProjectIndicators}
                  />

                  <br />

                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    onClick={this.cancelProject}
                    style={{
                      backgroundColor: "white",
                      color: "red",
                      borderRadius: "2rem",
                      textTransform: "none",
                      boxShadow: "none",
                      borderColor: "#53D1BE",
                    }}
                  >
                    Cancel
                  </Button>
                  {this.state.alert}

                  <CustomButton 
                  onClick={this.createProject}
                  content={
                    createBtn
                  }
                  loading={creating}
                  />
                  
                  {this.state.alert}
                </div>
              )}
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

//this.props.project.projects

const mapStateToProps = (state) => ({
  project: state.projects,
  auth: state.auth,
});

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ",
})(ImpactManager);

export default connect(mapStateToProps, { createProject })(WrappedContainer);
