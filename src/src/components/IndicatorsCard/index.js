import React, { Component } from "react";
import { Col, Row, Card } from "antd";
import "./index.css";

export class IndicatorsCard extends Component {
  render() {
    return (
      <div>
        <div>
          <Col span={24}>
            <Card className={"cardStyle"}>
              <Row>
                <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                  <span className={"spanStyle"}>No of SDGs</span>
                  <p className={"paragraphStyle"}>1</p>
                </Col>

                <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                  <span className={"spanStyle"}>Indicators</span>
                  <p className={"paragraphStyle"}>6</p>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                  <span className={"spanStyle"}>Total Beneficiaries</span>
                  <p className={"paragraphStyle"}>14,500</p>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                  <span className={"spanStyle"}>Awarded</span>
                  <p className={"paragraphStyle"}>₦25B</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </div>
      </div>
    );
  }
}

export default IndicatorsCard;
