import React, { Component } from "react";
import { Card, Skeleton, Typography } from "antd";
import { Doughnut } from "react-chartjs-2";
import "./index.css";
import { connect } from "react-redux";
import _, { flatten, uniqBy } from "lodash";

const renderObjects =  (programs) => {
  const sdgs = uniqBy(flatten(programs?.map(({sdgs}) => sdgs)),'sdgId')
  const sdgsNames = sdgs?.map(({name}) => name)
  console.log(sdgsNames)
  return sdgsNames; 
};

const renderOccurence = (programs) => {
  const sdgs = flatten(programs?.map(({sdgs}) => sdgs))
  const sdgsNames = sdgs?.map(({name}) => name)
  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const counts = countOccurrences(sdgsNames);
  console.log(counts)
  return Object.values(counts);
};

export class DoughnutChart extends Component {

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
    labels: renderObjects(this.props.project?.programs),
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
        data: renderOccurence(this.props.project?.programs),
      },
    ],
  };

  render() {
   
    return (
      <div>
        <Card title={"Impact Summary"} className={"doughnutCard"}>
          {renderOccurence(this.props.project?.programs).length === 0 ? (
            <div style={{textAlign: 'center'}}>
              <Skeleton active />
            </div>
          ) : (
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
          )}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.projects,
});

export default connect(mapStateToProps, {})(DoughnutChart);
