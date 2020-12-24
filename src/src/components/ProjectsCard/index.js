import React, { Component } from "react";
import "./index.css";
import { Layout, Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const data = [
  {
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Home Grown School Feeding",
    description: "HGSF",
    location: "Nigeria",
    impact: "SDG2",
  },
  {
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Reduced Inequalities",
    description: "HGSF",
    location: "Ghana",
    impact: "SDG1",
  },
  {
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Affordable Health Care",
    description: "JOI",
    location: "Nigeria",
    impact: "SDG2, SDG4",
  },
];

export class ProjectsCard extends Component {
  render() {
    return (
      <div>
        <Row>
          {data.map((project) => (
            <div>
              <Col>
                <Card
                  className={"projectCard"}
                  cover={<img alt={project.title} src={project.image} />}
                  actions={[
                    <Link to={"/dashboard/projects/overview"}>
                      <Button
                        shape="round"
                        type="primary"
                        className={"projectButton"}
                      >
                        Overview
                      </Button>
                    </Link>,
                  ]}
                >
                  <Meta
                    title={project.title}
                    description={project.description}
                  />
                  <div>
                    <Row style={{ marginTop: "10px" }}>
                      <Col span={12}>
                        <span className={"projectSpan"}>Location</span>
                        <p className={"projectParagraph"}>{project.location}</p>
                      </Col>
                      <Col span={12}>
                        <span className={"projectSpan"}>Impact</span>
                        <p className={"projectParagraph"}>{project.impact}</p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default ProjectsCard;
