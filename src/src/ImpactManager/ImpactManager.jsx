import React from "react";
import Aux from "../components/hocs/_Aux";
import { Button } from "@material-ui/core";
import { withStore } from "@spyna/react-store";
import { Row, Col, Card, Form } from "antd";
import ImpactManagerForm1 from "./ImpactManagerForm1";
import ImpactManagerForm2 from "./ImpactManagerForm2";
import ImpactManagerForm3 from "./ImpactManagerForm3";
import ImpactManagerSummary from "./ImpactManagerSummary";
import { appHelpers } from "../appHelpers/appHelpers";
import { sdgDump } from "./sdgDump";

const locationsEnum = [
  { label: "Nigeria", value: "ng" },
  { label: "Ghana", value: "gh" },
];

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
      projectLocation: "",
      projectDescription: "",
      impactManagerFormOne: true,
      impactManagerFormTwo: false,
      impactManagerFormThree: false,
      impactManagerSummary: false,
      sdgCheckBoxes: {},
      sdgChecks: [],
      indicatorCheckBoxes: {},
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
        projectLocation: false,
        projectCode: false,
      },
      formTwoErrors: {
        sdg: false,
      },
      formThreeErrors: {
        indicator: false,
      },
    };
    this.createProject = this.createProject.bind(this);
    this.cancelProject = this.cancelProject.bind(this);
  }

  componentDidMount() {}

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
        projectLocation: this.state.projectLocation,
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
      projectLocation,
      projectDescription,
      sdgCheckBoxes,
      indicatorCheckBoxes,
    } = this.state;
    const payload = {
      projectCode,
      projectName,
      projectLocation,
      projectDescription,
      sdgCheckBoxes,
      indicatorCheckBoxes,
    };
    console.log(payload);
  }

  cancelProject() {
    console.log("Project cancelled");
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

  handleSelectChange = (input) => ({ target: { value } }) => {
    this.setState({ [input]: value });
  };

  render() {
    const {
      projectDescription,
      projectCode,
      projectName,
      projectLocation,
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
        <Row>
          <Col md={12}>
            <Card>
              <Card>
                <Card>
                  <Card as="h4">Impact Manager</Card>
                  {/* Page One */}
                  {impactManagerFormOne && (
                    <div>
                      <Card>
                        Design your impact profile based on your priorities and
                        needs
                      </Card>
                      <ImpactManagerForm1
                        projectDescription={projectDescription}
                        projectName={projectName}
                        projectCode={projectCode}
                        projectLocation={projectLocation}
                        handleInputChange={this.handleInputChange}
                        handleSelectChange={this.handleSelectChange}
                        formOneErrors={formOneErrors}
                        locationsEnum={locationsEnum}
                      />
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={this.openImageManagerFormTwo}
                        style={{
                          backgroundColor: "#53D1BE",
                          color: "white",
                          borderRadius: "2rem",
                        }}
                      >
                        Save & Continue
                      </Button>
                    </div>
                  )}
                  {/* Page Two */}
                  {impactManagerFormTwo && (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {" "}
                        <Card style={{ fontSize: "large" }}>
                          Select the Sustainable Development Goals for this
                          project
                        </Card>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={this.goBack}
                          style={{
                            backgroundColor: "#53D1BE",
                            color: "white",
                            borderRadius: "1rem",
                            marginBottom: "2rem",
                          }}
                        >
                          Go Back
                        </Button>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#53d1be1a",
                          paddingLeft: ".5rem",
                          paddingBottom: ".5rem",
                          paddingTop: ".5rem",
                        }}
                      >
                        <p style={{ fontSize: "small", marginBottom: "0rem" }}>
                          First, select the Sustainable Development Goals
                          (SDGs).
                        </p>
                        <p style={{ fontSize: "small", marginBottom: "0rem" }}>
                          Next, further specify preferred Indicators that best
                          match your project goals.
                        </p>
                        <p style={{ fontSize: "small", marginBottom: "0rem" }}>
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
                        color="primary"
                        onClick={this.openImageManagerFormThree}
                        style={{
                          backgroundColor: "#53D1BE",
                          color: "white",
                          borderRadius: "2rem",
                        }}
                      >
                        Save & Continue
                      </Button>
                    </div>
                  )}
                  {impactManagerFormThree && (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {" "}
                        <Card style={{ fontSize: "large" }}>
                          Select Indicators
                        </Card>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={this.goBackTwo}
                          style={{
                            backgroundColor: "#53D1BE",
                            color: "white",
                            borderRadius: "1rem",
                            marginBottom: "2rem",
                          }}
                        >
                          Go Back
                        </Button>
                      </div>

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
                        color="primary"
                        onClick={this.openImpactManagerSummary}
                        style={{
                          backgroundColor: "#53D1BE",
                          color: "white",
                          borderRadius: "2rem",
                        }}
                      >
                        Save & Continue
                      </Button>
                      {this.state.alert}
                    </div>
                  )}

                  {impactManagerSummary && (
                    <div>
                      <ImpactManagerSummary
                        {...this.state}
                        {...this.props}
                        editProjectProfileCallback={this.editProjectProfile}
                        editSdgGoalsCallback={this.editSdgGoals}
                        indicatorCheckBoxes={indicatorCheckBoxes}
                        editProjectIndicatorsCallback={
                          this.editProjectIndicators
                        }
                      />

                      <br />

                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={this.createProject}
                        style={{
                          backgroundColor: "#53D1BE",
                          color: "white",
                          borderRadius: "2rem",
                        }}
                      >
                        {createBtn}
                      </Button>
                      {this.state.alert}

                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={this.cancelProject}
                        style={{
                          backgroundColor: "#53D1BE",
                          color: "white",
                          borderRadius: "2rem",
                          marginLeft: "2rem",
                        }}
                      >
                        Cancel Project
                      </Button>
                      {this.state.alert}
                    </div>
                  )}
                </Card>
              </Card>
            </Card>
   </Col>
  </Row>
      </Aux>
    );
  }
}

export default ImpactManager;
