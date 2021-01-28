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
import { sdgDump } from "./sdgDump";
import "./index.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { createProject } from "../../actions/projectAction";
import { useDropzone } from "react-dropzone";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

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
      sdgDump: sdgDump,
      projectName: "",
      projectCode: "",
      //projectLocation: "",
      programmeLocation: "",
      projectDescription: "",
      programmePlaces: "",
      projectBanner: [],
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
      indicators: [
        {
          id: 1,
          Name: "No Poverty",
        },
        {
          id: 2,
          Name: "No Hunger",
        },
      ],
      formOneErrors: {
        projectName: false,
        projectDescription: false,
        // projectLocation: false,
        programmeLocation: false,
        projectCode: false,
        programmePlaces: "",
        projectBanner: false,
      },
      formTwoErrors: {
        sdg: false,
      },
      formThreeErrors: {
        indicator: false,
      },
      // for google map places autocomplete
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375,
      },
    };
    this.createProject = this.createProject.bind(this);
    this.cancelProject = this.cancelProject.bind(this);
  }

  handleChangePlace = (address) => {
    this.setState({ address });
    console.log(address);
    console.log("Happuning")
  };

  handleSelectPlace = (address, selectedPlace, activeMarker) => {
    this.setState({ address, selectedPlace, activeMarker });
    console.log(activeMarker);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  componentDidMount() {}

  handleBannerChange = (file) => {
    console.log("Files:", file);
    this.setState({
      projectBanner: file.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    });
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
        projectName: this.state.projectName,
        projectCode: this.state.projectCode,
        projectDescription: this.state.projectDescription,
        // projectLocation: this.state.projectLocation,
        programmeLocation: this.state.programmeLocation,
        projectBanner: this.state.projectBanner,
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
    const {
      projectCode,
      projectName,
      // projectLocation,
      programmeLocation,
      projectDescription,
      programmePlaces,
      sdgCheckBoxes,
      indicatorCheckBoxes,
      projectBanner,
      activeMarker,
    } = this.state;
    const payload = {
      projectCode,
      projectName,
      //projectLocation,
      programmeLocation,
      projectDescription,
      programmePlaces,
      sdgCheckBoxes,
      indicatorCheckBoxes,
      projectBanner,
      activeMarker,
    };
    this.props.createProject(payload);
    appHelpers.successMessageAlert("Programme Successfully Created");
    console.log(payload);
    // window.location.reload();
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

  handleCheckboxChange = (indicatorValue, e, indicatorIndex, sdgIndex) => {
    const { allIndicators, sdgChecks } = this.state;
    const newIndicators = allIndicators.map((indicator, id) => {
      if (indicatorIndex !== id) return indicator;
      return {
        ...indicator,
        status: e.target.checked,
      };
    });

    const newSdgChecks = sdgChecks.map((q, i) =>
      parseInt(q.Number) === sdgIndex
        ? {
            ...q,
            Indicators: q.Indicators.map((o, i) =>
              i === indicatorIndex
                ? {
                    ...o,
                    Status: e.target.checked,
                  }
                : o
            ),
          }
        : q
    );
    this.setState({
      indicatorCheckBoxes: {
        ...this.state.indicatorCheckBoxes,
        [indicatorIndex]: indicatorValue,
      },
      allIndicators: newIndicators,
      sdgChecks: newSdgChecks,
    });
    console.log(newSdgChecks);
  };

  updateSvgState = (sdg) => {
    const { sdgDump, sdgChecks } = this.state;

    let filtered = sdgDump.filter((item) => {
      return parseInt(item.Number) === parseInt(sdg);
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
        sdgChecks: prevState.sdgChecks.filter(
          (SDG) => SDG.Number !== obj.Number
        ),
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
      projectDescription,
      projectCode,
      projectName,
      //projectLocation,
      programmeLocation,
      programmePlaces,
      projectBanner,
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
                    projectDescription={projectDescription}
                    projectName={projectName}
                    projectCode={projectCode}
                    projectBanner={projectBanner}
                    programmePlaces={programmePlaces}
                    programmeLocation={programmeLocation}
                    // projectLocation={projectLocation}
                    handleInputChange={this.handleInputChange}
                    handleSelectChange={this.handleSelectChange}
                    handleBannerChange={this.handleBannerChange}
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

                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={this.createProject}
                    style={{
                      backgroundColor: "#53D1BE",
                      color: "white",
                      borderRadius: "2rem",
                      textTransform: "none",
                      boxShadow: "none",
                      float: "right",
                    }}
                  >
                    {createBtn}
                  </Button>
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
});

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ",
})(ImpactManager);

export default connect(mapStateToProps, { createProject })(WrappedContainer);
