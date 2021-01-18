import React, { Component } from "react";
import { Card, Skeleton } from "antd";
import "./index.css";


export class ImpactMap extends Component {
  render() {
    return (
      <div className="impactTab">
        <Card title={"Impact Areas"}>
          <Skeleton active />
        </Card>
      </div>
    );
  }
}

export default ImpactMap;
