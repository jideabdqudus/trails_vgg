import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import "./index.css";
import { flatten, size, uniqBy } from "lodash";
import { useSelector } from "react-redux";

const ActionCard = () => {
  const {programs} = useSelector(state => state.projects)
console.log("mrPrograms",programs)
  const handleSdgs = (_programs) => {
    const sdgs = uniqBy(flatten(_programs?.map(({sdgs}) => sdgs)),'sdgId')
    return sdgs || []
  }
    return (
      <div> 
        <Col span={24}>
          <Card className={"actionCard"}>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Programmes</span>
                <p className={"actionItemParagraph"}>
                  {size(programs)}
                </p>
              </Col>

              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Impact Targets (SDG)</span>
                <p className={"actionItemParagraph"}>
                  {size(handleSdgs(programs))}
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Amount Awarded</span>
                <p className={"actionItemParagraph"}>
                 -
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <span className={"actionItemStyle"}>Amount Disbursed</span>
                <p className={"actionItemParagraph"}>
                  -
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    );
}

export default ActionCard;
