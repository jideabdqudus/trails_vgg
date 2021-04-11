import React, { Component, Fragment } from "react";
import { Grid, withStyles } from "@material-ui/core";
import ImageCard from "../../components/Card/ImageCard";
import { connect } from "react-redux";
import CatalogMagic from "../../components/Loader/CatalogMagic";
import { Link } from "react-router-dom";
import "./index.css";

import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});
export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
    };
  }

  componentDidMount = () => {
    const { ServiceBase, Constants } = this.props;
    ServiceBase.getItems(Constants.PROGRAMS).then(({ data }) => {
      this.setState({ projects: data.data }, () => {
        this.setState({ loading: false });
      });
    });
  };

  renderProjectList = (projects) => {
    let projectElem = [];
    for (let i in projects) {
      projectElem.push(
        <Grid item xs={12} sm={4} key={projects[i].id}>
          <ImageCard
            name={projects[i].name}
            code={projects[i].code}
            handleOverview={this.handleOverview}
            id={projects[i].id}
            image={projects[i].image}
            sdgs={projects[i].sdgs}
            locations={projects[i].locations[0].description}
          />
        </Grid>
      );
    }
    return projectElem;
  };

  handleOverview = (id, name) => {
    this.props.history.push({
      pathname: "/app/dashboard/overview",
      state: { detail: id, name: name },
    });
  };
  render() {
    const { projects, loading } = this.state;
    return (
      <div className="container-scroller">
        <TopHeader
          userData={this.props.userData}
          history={this.props.history}
        />
        <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
          <SideBarPanel
            userData={this.props.userData}
            history={this.props.history}
          />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row page-title-header">
                <div className="col-12">
                  <div className="page-header">
                    <h4 className="page-title">Program</h4>
                  </div>
                  <Fragment>
                    {!loading && projects.length === 0 && (
                      <div>
                        <h3>
                          When you add new projects, It would appear here!,{" "}
                          <Link to="/app/dashboard/manager">Click to add</Link>{" "}
                        </h3>
                      </div>
                    )}
                    <Grid container spacing={3}>
                      {loading &&
                        [0, 1, 2, 3, 4, 5].map((index) => {
                          return (
                            <Grid item xs={12} sm={4} key={index}>
                              <CatalogMagic />
                            </Grid>
                          );
                        })}
                      {!loading && this.renderProjectList(projects)}
                    </Grid>
                  </Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default connect(mapStateToProps, {})(ProjectsCard);

export default withStyles(styles)(connect(mapStateToProps, {})(Projects));

// const h1 = {
//   fontWeight: "700",
//   fontSize: "23px",
//   padding: "16px",
//   paddingLeft: "0px",
//   marginTop: "80px",
// };
