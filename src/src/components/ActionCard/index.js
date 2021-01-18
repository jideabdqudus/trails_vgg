import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import "./index.css";
export class ActionCard extends Component {
  render() {
    return (
      <div>
        <Col span={24}>
          <Card className={"actionCard"}>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Programmes</span>
                <p className={"actionItemParagraph"}>3</p>
              </Col>

              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Impact Targets (SDG)</span>
                <p className={"actionItemParagraph"}>04</p>
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

export default ActionCard;
