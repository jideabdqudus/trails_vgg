import React, { Component } from "react";
import { Card } from "antd";
import { Doughnut } from "react-chartjs-2";
//import { data } from "./data";
import "./index.css";
import { connect } from "react-redux";
import _ from "lodash";

export class DoughnutChart extends Component {
  renderObjects = () => {
    const { projects, indicator } = this.props.project;
    const dataArray = [];
    const json = projects.map((project) => (
      <>
        {" "}
        {Object.entries(project.indicatorCheckBoxes, dataArray).map(
          ([key, val]) => (
            <p className={"projectParagraph"} key={key}>
              {val}
              {dataArray.push(val)}
            </p>
          )
        )}
      </>
    ));
    var arr = dataArray;
    arr = _.uniq(arr);
    return arr;
  };

  renderOccurence = () => {
    const { projects, indicator } = this.props.project;
    const dataArray = [];
    let countObj = {};
    const json = projects.map((project) => (
      <>
        {" "}
        {Object.entries(project.indicatorCheckBoxes, dataArray).map(
          ([key, val]) => (
            <p className={"projectParagraph"} key={key}>
              {val}
              {dataArray.push(val)}
            </p>
          )
        )}
      </>
    ));
    const countOccurrences = (arr) =>
      arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

    const counts = countOccurrences(dataArray);

    return Object.values(counts);
  };

  colorArray = [
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  data = {
    labels: this.renderObjects(),
    datasets: [
      {
        label: "SDGs",
        backgroundColor: this.colorArray,
        hoverBackgroundColor: [
          "#A21942",
          "#DDA63A",
          "#E5243B",
          "#C5192D",
          "#33991A",
          "#CC9999",
          "#B3B31A",
          "#00E680",
        ],
        data: this.renderOccurence(),
      },
    ],
  };

  render() {
    const { indicator } = this.props.project;

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
