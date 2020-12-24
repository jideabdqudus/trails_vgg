import React, { Component } from "react";
import { Card, Skeleton } from "antd";
import "./index.css";

export class ImpactMap extends Component {
  render() {
    return (
      <div>
        <Card title={"Impact Areas"} className={"impactCard"}>
          <Skeleton active />
        </Card>
      </div>
    );
  }
}

export default ImpactMap;
