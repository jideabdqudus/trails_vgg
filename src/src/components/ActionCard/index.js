import React, { Component } from "react";
import { Row, Col, Card, Result } from "antd";
import "./index.css";
import { connect } from "react-redux";

export class ActionCard extends Component {
  renderObjects = () => {
    const { projects, indicator } = this.props.project;
    const dataArray = [];
    let value = 0;
    const json = projects.map((project) => (
      <>
        {" "}
        {Object.entries(project.indicatorCheckBoxes, value).map(
          ([key, val]) => (
            <p className={"projectParagraph"} key={key}>
              {" "}
              {val}
              {value++}
            </p>
          )
        )}
      </>
    ));
    return value;
  };

  render() {
    const { projects, awarded, disbursed } = this.props.project;

    return (
      <div>
        <Col span={24}>
          <Card className={"actionCard"}>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Programmes</span>
                <p className={"actionItemParagraph"}>
                  {projects.length == 0 ? "0" : projects.length}
                </p>
              </Col>

              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Impact Targets (SDG)</span>
                <p className={"actionItemParagraph"}>
                  {" "}
                  {this.renderObjects().length == 0
                    ? "0"
                    : this.renderObjects()}
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Amount Awarded</span>
                <p className={"actionItemParagraph"}>
                  {awarded == null ? "-" : awarded}
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Amount Disbursed</span>
                <p className={"actionItemParagraph"}>
                  {disbursed == null ? "-" : disbursed}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.projects,
});

export default connect(mapStateToProps, {})(ActionCard);
