import React, { Component } from "react";
import { Col, Row, Card } from "antd";
import "./index.css";


const IndicatorsCard = ({ sdgCount, indicatorCount, totalBeneficiaries, awardedCount, }) => {

  return (
    <div>
      <div>
        <Col span={24}>
          <Card className={"cardStyle"}>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>No of SDGs</span>
                <p className={"paragraphStyle"}>{sdgCount}</p>
              </Col>

              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>Indicators</span>
                <p className={"paragraphStyle"}>{indicatorCount}</p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>Total Beneficiaries</span>
                <p className={"paragraphStyle"}>{totalBeneficiaries}</p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>Awarded</span>
                <p className={"paragraphStyle"}>{awardedCount}</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default IndicatorsCard;
