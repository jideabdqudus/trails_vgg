import React from "react";
import Aux from "../hocs/_Aux";
import { Button } from "@material-ui/core";
import { withStore } from "@spyna/react-store";
import { Row, Col, Card, Form } from "antd";
import { sdgDump } from "./sdgDump";
import { appHelpers } from "../../appHelpers/appHelpers";
import SvgCardView from "../SvgCard/SvgCardView";
import IndicatorView from "../Indicators/IndicatorView";

class ImpactManagerSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: this.props.projectName,
      projectCode: this.props.projectCode,
      projectLocation: this.props.projectLocation,
      projectDescription: this.props.projectDescription,
      sdgCheckBoxes: this.props.sdgCheckBoxes,
      indicators: this.props.indicators,
    };
  }

  componentDidMount() {}

  editProjectProfile = () => {
    this.props.editProjectProfileCallback();
  };
  editSdgGoals = () => {
    this.props.editSdgGoalsCallback();
  };

  editProjectIndicators = () => {
    this.props.editProjectIndicatorsCallback();
  };

  renderSvgCards = () => {
    const filtered = appHelpers.returnSelectedSdgs(
      this.state.sdgCheckBoxes,
      sdgDump
    );
    const allSdgs = filtered.map((item, index) => {
      return <SvgCardView key={index} path={item.Image} width="10%" />;
    });

    return allSdgs;
  };

  renderIndicators = () => {
    const indicators = appHelpers.indicatorSummary(this.props.sdgChecks);
    const allIndicators = indicators.map((item, index) => {
      return <IndicatorView key={index} indicator={item.Text} />;
    });

    return allIndicators;
  };

  render() {
    const {
      projectDescription,
      projectCode,
      projectName,
      projectLocation,
      sdgChecks,
    } = this.state;

    return (
      <Aux>
        <Row>
          <Col md={12}>
            <Card>
              <Card
                
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5>Project Profile</h5>{" "}
                </div>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={this.editProjectProfile}
                  style={{
                    backgroundColor: "#53D1BE",
                    color: "white",
                    borderRadius: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  Edit
                </Button>
              </Card>
              <Card>
                <div style={{ display: "flex" }}>
                  <div>
                    <h6>Project Name</h6>
                    <label>{projectName}</label>
                  </div>
                  <div style={{ marginLeft: "1rem" }}>
                    <h6>Project Code</h6>
                    <label>{projectCode}</label>
                  </div>
                </div>
                <br />
                <div>
                  <h6>Project Description</h6>
                  <label>{projectDescription}</label>
                </div>
              </Card>
            </Card>
            <Card>
              <Card
                
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 0,
                }}
              >
                <div>
                  <h5>Sustainable Development Goals</h5>{" "}
                </div>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={this.editSdgGoals}
                  style={{
                    backgroundColor: "#53D1BE",
                    color: "white",
                    borderRadius: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  Edit
                </Button>
              </Card>
              <Card style={{ paddingTop: 0 }}>
                {this.renderSvgCards()}
              </Card>
            </Card>
            <Card>
              <Card
                
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5>Project Indicators</h5>{" "}
                </div>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={this.editProjectIndicators}
                  style={{
                    backgroundColor: "#53D1BE",
                    color: "white",
                    borderRadius: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  Edit
                </Button>
              </Card>
              <Card style={{ paddingTop: 0 }}>
                {this.renderIndicators()}
              </Card>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default ImpactManagerSummary;
