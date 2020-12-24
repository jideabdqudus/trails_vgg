import React, { Component } from "react";
import { Card } from "antd";
import { Doughnut } from "react-chartjs-2";
import { data } from "./data";
import "./index.css";

export class DoughnutChart extends Component {
  render() {
    return (
      <div>
        <Card title={"Impact Summary"} className={"doughnutCard"}>
          <Doughnut
            data={data}
            width={100}
            height={100}
            options={{
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </Card>
      </div>
    );
  }
}

export default DoughnutChart;
