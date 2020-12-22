import React, { Component } from "react";
import { Card, Skeleton } from "antd";
import "./index.css";

export class FundingGraph extends Component {
  render() {
    return (
      <div>
        <Card title={"Funding Status"} className={"fundingCard"}>
          <Skeleton active />
        </Card>
      </div>
    );
  }
}

export default FundingGraph;
