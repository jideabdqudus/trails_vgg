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
const { Content } = Layout;

export class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDetails: {},
      projectName: "",
      loading: true,
    };
  }

  componentDidMount = () => {
    const { ServiceBase, Constants } = this.props;
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.detail
    ) {
      const { detail, name } = this.props.location.state;
      this.setState({ projectName: name });

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
    const { projectDetails, projectName, loading } = this.state;
    return (
      <div>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <SideBar
              userData={this.props.userData}
              history={this.props.history}
            />
            <Layout className="site-layout">
              <Navbar
                userData={this.props.userData}
                history={this.props.history}
              />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>{projectName}</h1>
                <div>
                  <IndicatorsCard
                    sdgCount={projectDetails.sdgs && projectDetails.sdgs.length}
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
                    <Indicators />
                  </div>
                </div>
              </Content>
              <FooterTab />
            </Layout>
          </Layout>
        </Fragment>
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
