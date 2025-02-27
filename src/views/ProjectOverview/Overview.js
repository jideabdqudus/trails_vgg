import React, { Component, Fragment } from "react";
import IndicatorsCard from "../../components/IndicatorsCard";
import Indicators from "../../components/PerformanceIndicators";
import { connect } from "react-redux";
import { appHelpers } from "../../appHelpers/appHelpers";
import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

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
                    <h4 className="page-title">{projectName}</h4>
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

