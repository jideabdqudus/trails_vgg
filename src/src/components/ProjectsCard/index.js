import React, { Component } from "react";
import "./index.css";
import { Layout, Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const { Meta } = Card;

export class ProjectsCard extends Component {
  render() {
    const { projects } = this.props.project;
    return (
      <div>
        <Row>
          {projects.map((project) => (
            <div>
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <Card
                  className={"projectCard"}
                  cover={
                    <img alt={project.projectName} src={project.projectImage} style={{height:"200px", }} />
                  }
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
                    title={project.projectName}
                    description={project.projectDescription}
                  />
                  <div>
                    <Row style={{ marginTop: "10px" }}>
                      <Col span={8}>
                        <span className={"projectSpan"}>Location</span>
                        <p className={"projectParagraph"}>
                          {project.projectLocation}
                        </p>
                      </Col>
                      <Col span={8}>
                        <span className={"projectSpan"}>Project Code</span>
                        <p className={"projectParagraph"}>
                          {project.projectCode}
                        </p>
                      </Col>
                      <Col span={8}>
                        <span className={"projectSpan"}>Impact</span>
                        <p className={"projectParagraph"}>
                          <div className="gameStatistics">
                            {Object.entries(project.sdgCheckBoxes).map(
                              ([key, val]) => (
                                <p className={"projectParagraph"} key={key}>
                                  {" "}
                                  SDG {key}
                                </p>
                              )
                            )}
                          </div>
                        </p>
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

const mapStateToProps = (state) => ({
  project: state.projects,
});

export default connect(mapStateToProps, {})(ProjectsCard);
