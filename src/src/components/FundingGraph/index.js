import React, { Component } from "react";
import { Card, Skeleton } from "antd";
import "./index.css";
import { Bar, Line } from "react-chartjs-2";
import { data } from "./data";

export class FundingGraph extends Component {
  render() {
    return (
      <div className="fundingTab">
        <Card title={"Funding Status"} >
          <Skeleton active /> 
          {/* <Line
            data={data}
            options={{
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          /> */}
        </Card>
      </div>
    );
  }
}

export default FundingGraph;
