import React, { Component } from "react";
import "./index.css";
import { Layout, Row, Col, Card, Skeleton } from "antd";

const { Content } = Layout;

export class Indicators extends Component {
  render() {
    return (
      <div>
        <Content style={{ margin: "0 16px" }}>
          <h1 style={{ fontSize: "16px" }}> PERFORMANCE INDICATORS</h1>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Card className={"indicatorCard"}>
                <Skeleton active />
              </Card>
              <Card className={"indicatorCard"}>
                <Skeleton active />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Card className={"indicatorCard"}>
                <Skeleton active />
              </Card>
              <Card className={"indicatorCard"}>
                <Skeleton active />
              </Card>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default Indicators;
