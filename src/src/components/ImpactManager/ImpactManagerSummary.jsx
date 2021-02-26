import React from "react";
import Aux from "../hocs/_Aux";
import { Button } from "@material-ui/core";
import { withStore } from "@spyna/react-store";
import { Row, Col, Card } from "antd";
//import { sdgDump } from "./sdgDump";
import { appHelpers } from "../../appHelpers/appHelpers";
import SvgCardView from "../SvgCard/SvgCardView";
import IndicatorView from "../Indicators/IndicatorView";
import { EditOutlined } from "@ant-design/icons";

class ImpactManagerSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      code: this.props.code,
      projectLocation: this.props.projectLocation,
      image: this.props.image,
      programmeLocation: this.props.programmeLocation,
      description: this.props.description,
      sdgCheckBoxes: this.props.sdgCheckBoxes,
      programmePlaces: this.props.programmePlaces,
      indicators: this.props.indicators,
      allImpacts: this.props.allImpacts,
      sdgDump: this.props.sdgDump,
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
      this.state.sdgDump
    );
    const allSdgs = filtered.map((item, index) => {
      return <SvgCardView key={index} path={item.image} width="10%" />;
    });

    return allSdgs;
  };

  renderIndicators = () => {
    const indicators = appHelpers.indicatorSummary(this.props.sdgChecks);
    const allIndicators = indicators.map((item, index) => {
      return <IndicatorView key={index} indicator={item.description} />;
    });
    return allIndicators;

    // this.setState({ allImpacts: allIndicators });
  };

  render() {
    const {
      description,
      code,
      name,
      programmeLocation,
      programmePlaces,
      //projectLocation,
      image,
      sdgChecks,
      sdgDump,
    } = this.state;
    {
      console.log("Heres", this.renderIndicators());
    }
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
                    <h6>Programme Name</h6>
                    <h6 style={{ fontWeight: "normal", color: "grey" }}>
                      {name}
                    </h6>
                  </Col>
                  <Col span={12}>
                    <h6>Project Code</h6>
                    <h6 style={{ fontWeight: "normal", color: "grey" }}>
                      {code}
                    </h6>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={12}>
                    <h6>Programme Description</h6>
                    <h6 style={{ fontWeight: "normal", color: "grey" }}>
                      {description}
                    </h6>
                  </Col>
                </Row>
                <br />
                <div>
                  {/* <h6>Programme Location</h6> */}
                  <h6 style={{ fontWeight: "normal", color: "grey" }}>
                    {/* {programmeLocation} */}
                    {/* {programmePlaces} */}
                  </h6>
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
                <h6 style={{ fontWeight: "normal", color: "grey" }}>
                  {this.renderIndicators()}
                </h6>
              </Card>
            </div>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default ImpactManagerSummary;
