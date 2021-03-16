import React, { Component } from "react";
import { Col, Row, Card } from "antd";
import "./index.css";
import CustomCircularProgress from "../Loader/CustomCircularProgress";

const IndicatorsCard = ({
  loading,
  sdgCount,
  indicatorCount,
  totalNumberOfBeneficiaries,
  budget,
}) => {
  return (
    <div>
      <div>
        <Col span={24}>
          <Card className={"cardStyle"}>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>No of SDGs</span>
                {
                  <p className={"paragraphStyle"}>
                    {loading ? <CustomCircularProgress size={25} /> : sdgCount}
                  </p>
                }
              </Col>

              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>Indicators</span>
                {
                  <p className={"paragraphStyle"}>
                    {loading ? (
                      <CustomCircularProgress size={25} />
                    ) : (
                      indicatorCount
                    )}
                  </p>
                }
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>Total Beneficiaries</span>
                {
                  <p className={"paragraphStyle"}>
                    {loading ? (
                      <CustomCircularProgress size={25} />
                    ) : (
                      totalNumberOfBeneficiaries
                    )}
                  </p>
                }
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"spanStyle"}>Budget</span>
                {
                  <p className={"paragraphStyle"}>
                    {loading ? <CustomCircularProgress size={25} /> : budget}
                  </p>
                }
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default IndicatorsCard;
