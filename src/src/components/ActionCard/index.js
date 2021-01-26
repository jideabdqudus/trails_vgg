import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import "./index.css";
import { connect } from "react-redux";

export class ActionCard extends Component {
  render() {
    const { projects, indicator } = this.props.project;
    return (
      <div>
        <Col span={24}>
          <Card className={"actionCard"}>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Programmes</span>
                <p className={"actionItemParagraph"}>{projects.length}</p>
              </Col>

              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Impact Targets (SDG)</span>
                <p className={"actionItemParagraph"}>
                  {" "}
                  {Object.keys(indicator).length == 0
                    ? "0"
                    : Object.keys(indicator[0]).length}
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Amount Awarded</span>
                <p className={"actionItemParagraph"}>₦52.1B</p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Amount Disbursed</span>
                <p className={"actionItemParagraph"}>₦21.4B</p>
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
