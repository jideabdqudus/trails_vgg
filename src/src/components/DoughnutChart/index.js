import React, { Component } from "react";
import { Card } from "antd";
import { Doughnut } from "react-chartjs-2";
//import { data } from "./data";
import "./index.css";
import { connect } from "react-redux";

export class DoughnutChart extends Component {
  data = {
    labels: this.props.project.indicator,
    datasets: [
      {
        label: "SDGs",
        backgroundColor: ["#A21942", "#DDA63A", "#E5243B", "#C5192D"],
        hoverBackgroundColor: ["#A21942", "#DDA63A", "#E5243B", "#C5192D"],
        data: [65, 59, 80, 81],
      },
    ],
  };
  render() {
    {
      console.log(
        Object.entries(this.props.project.indicator).map(([key, val]) =>
          console.log(val)
        )
      );
      console.log(this.props.project.indicator)
    }

    return (
      <div>
        <Card title={"Impact Summary"} className={"doughnutCard"}>
          <Doughnut
            data={this.data}
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

const mapStateToProps = (state) => ({
  project: state.projects,
});

export default connect(mapStateToProps, {})(DoughnutChart);
