import React from "react";
import Aux from "../hocs/_Aux";
import { Button } from "@material-ui/core";
import { withStore } from "@spyna/react-store";
import { Row, Col, Card } from "antd";
import { sdgDump } from "./sdgDump";
import { appHelpers } from "../../appHelpers/appHelpers";
import SvgCardView from "../SvgCard/SvgCardView";
import IndicatorView from "../Indicators/IndicatorView";
import { EditOutlined } from "@ant-design/icons";

class ImpactManagerSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: this.props.projectName,
      projectCode: this.props.projectCode,
      projectLocation: this.props.projectLocation,
      projectBanner: this.props.projectBanner,
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
      projectBanner,
      sdgChecks,
    } = this.state;

    return (
      <Aux>
        <Row>
          <Col md={24}>
            <div>
              <Card
                title={"Programme Profile"}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={this.editProjectProfile}
                  style={{
                    backgroundColor: "white",
                    color: "#53D1BE",
                    borderRadius: "2rem",
                    textTransform: "none",
                    boxShadow: "none",
                    borderColor: "#53D1BE",
                  }}
                >
                  <EditOutlined />
                  Edit
                </Button>
              </Card>
              <Card>
                <Row style={{ display: "flex" }}>
                  <Col span={"12"}>
                    <h1>Programme Name</h1>
                    <h1 style={{ fontWeight: "normal", color: "grey" }}>
                      {projectName}
                    </h1>
                  </Col>
                  <Col style={{ marginLeft: "1rem" }}>
                    <h1>Project Code</h1>
                    <h1 style={{ fontWeight: "normal", color: "grey" }}>
                      {projectCode}
                    </h1>
                  </Col>
                </Row>
                <br />
                <div>
                  <h1>Programme Description</h1>
                  <h1 style={{ fontWeight: "normal", color: "grey" }}>
                    {projectDescription}
                  </h1>
                </div>
              </Card>
            </div>
            <br />
            <div>
              <Card
                title={"Sustainable Development Goals"}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={this.editSdgGoals}
                  style={{
                    backgroundColor: "white",
                    color: "#53D1BE",
                    borderRadius: "2rem",
                    textTransform: "none",
                    boxShadow: "none",
                    borderColor: "#53D1BE",
                  }}
                >
                  <EditOutlined />
                  Edit
                </Button>
              </Card>
              <Card>
                <Row>
                  <Col span={"24"}>
                    <div style={{ paddingTop: 0 }}>{this.renderSvgCards()}</div>
                  </Col>
                </Row>
              </Card>
            </div>
            <br />
            <div>
              <Card
                title={"Programme Indicators"}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={this.editProjectIndicators}
                  style={{
                    backgroundColor: "white",
                    color: "#53D1BE",
                    borderRadius: "2rem",
                    textTransform: "none",
                    boxShadow: "none",
                    borderColor: "#53D1BE",
                  }}
                >
                  <EditOutlined />
                  Edit
                </Button>
              </Card>
              <Card style={{ paddingTop: 0 }}>
                <h1 style={{ fontWeight: "normal", color: "grey" }}>
                  {this.renderIndicators()}
                </h1>
              </Card>
            </div>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default ImpactManagerSummary;
