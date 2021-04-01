import React, { Component, Fragment } from "react";
import { Layout, Row, Col } from "antd";

import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import IndicatorsCard from "../../components/IndicatorsCard";
import Indicators from "../../components/PerformanceIndicators";
import axios from "axios";
import { appConstants } from "../../constants/app.constants";
import { connect } from "react-redux";
import { appHelpers } from "../../appHelpers/appHelpers";
import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

const { Content } = Layout;

export class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDetails: {},
      projectName: "",
      loading: true,
      projectId: null,
    };
  }

  componentDidMount = () => {
    const { ServiceBase, Constants } = this.props;
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.detail
    ) {
      console.log(this.props.location);
      const { detail, name } = this.props.location.state;
      this.setState({ projectName: name, projectId: detail });
      ServiceBase &&
        ServiceBase.getDataUsingId(Constants.PROGRAMS, detail).then(
          ({ data }) => {
            this.setState({ projectDetails: data.data }, () => {
              this.setState({ loading: false });
            });
          }
        );
    } else {
      this.props.history.push("/dashboard/projects");
    }
  };
  render() {
    const { projectDetails, projectName, loading, projectId } = this.state;
    return (
      <div class="container-scroller">
        <TopHeader
          userData={this.props.userData}
          history={this.props.history}
        />
        <div class="page-body-wrapper" style={{ marginTop: "60px" }}>
          <SideBarPanel
            userData={this.props.userData}
            history={this.props.history}
          />
          <div class="main-panel" style={{ marginLeft: "270px" }}>
            <div class="content-wrapper">
              <div class="row page-title-header">
                <div class="col-12">
                  <div class="page-header">
                    <h4 class="page-title">{projectName}</h4>
                  </div>
                  <Fragment>
                    <div>
                      <IndicatorsCard
                        sdgCount={
                          projectDetails.sdgs && projectDetails.sdgs.length
                        }
                        indicatorCount={appHelpers.countProjectIndicators(
                          projectDetails.sdgs && projectDetails.sdgs
                        )}
                        loading={loading}
                        totalNumberOfBeneficiaries={
                          projectDetails.totalNumberOfBeneficiaries
                        }
                        budget={projectDetails.budget}
                      />
                    </div>
                    <div
                      className="site-layout-background"
                      style={{ padding: 24, minHeight: 360 }}
                    >
                      <div>
                        <Indicators
                          projectDetails={projectDetails}
                          programId={projectId}
                          service={this.props.ServiceBase}
                        />
                      </div>
                    </div>
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

export default connect(mapStateToProps, {})(Overview);

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
