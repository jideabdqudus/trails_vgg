import React, { Component } from "react";
import "./index.css";
import { Layout, Row, Col, Card, Button, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { appConstants } from "../../constants/app.constants";
const { Meta } = Card;


// NO MORE NEEDED
export class ProjectsCard extends Component {
  constructor(props){
    super(props)
    this.state={
      projects:[]
    }
  }
  renderProjects = () => {
    const { projects } = this.props.project;
    let string = "";
    projects.map((project, string) => {
      <>
        {project.image.fileList.map((image) => {
          <>{image.thumbUrl}</>;
        })}
      </>;
    });
  };
  
  componentDidMount =() =>{
    // no more in use at all
    axios({
      method: "GET",
      url:  `http://trail-api.test.vggdev.com/${appConstants.PROGRAMS}/`,
       headers: { accessToken: this.props.auth.data.accessToken},
    })
    .then(({data})=>{
      console.log("data".data)
      this.setState({projects:data.data})
    })
  }

  render() {
    const {projects} = this.state
    return (
      <div>
        {projects.length == 0 ? (
          <div>
            <h3>
              When you add new projects, It would appear here!,{" "}
              <Link to="/dashboard/manager">Click to add</Link>{" "}
            </h3>
          </div>
        ) : (
          <Row>
            {projects.map((project) => (
              <div>
                <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                  <Card
                    className={"projectCard"}
                    cover={
                      <img
                        alt={project.name}
                        // src={project.image.fileList.map((image) => {
                        //   <>{image.thumbUrl}</>;
                        // })}
                        src={project.image}
                        style={{ height: "200px" }}
                      />
                    }
                    actions={[
                      <Link to={"/app/dashboard/projects/overview"}>
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
                      title={project.name}
                      description={project.description}
                    />
                    <div>
                      <Row style={{ marginTop: "10px" }}>
                        <Col span={8}>
                          <span className={"projectSpan"}>Location</span>
                          <p className={"projectParagraph"}>
                            {/* {project.location.description} */}
                            {project.locations[0].description}
                          </p>
                        </Col>
                        <Col span={8}>
                          <span className={"projectSpan"}>Project Code</span>
                          <p className={"projectParagraph"}>{project.code}</p>
                        </Col>
                        <Col span={8}>
                          <span className={"projectSpan"}>Impact</span>
                          <p className={"projectParagraph"}>
                            <div className="gameStatistics">
                              {/* {Object.entries(project.sdgs).map(
                                ([key, val]) => (
                                  <p className={"projectParagraph"} key={key}>
                                    {" "}
                                    SDG {key}
                                  </p>
                                )
                              )} */}
                              {project.sdgs.map((val,index)=>{
                                (
                                  <p className={"projectParagraph"} key={index}>
                                  {" "}
                                  SDG {val.sdgId}
                                </p> 
                                )
                              })

                              }
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.projects,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ProjectsCard);
