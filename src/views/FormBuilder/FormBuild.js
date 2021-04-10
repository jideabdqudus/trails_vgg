import React, { Fragment } from "react";
import BuildForm from "../../components/FormBuilder.js/BuildForm";

import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

class FormBuild extends React.Component {
  render() {
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
                    <h4 className="page-title">Form Management</h4>
                  </div>
                  <Fragment>
                    {" "}
                    <BuildForm service={this.props.ServiceBase} />
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
export default FormBuild;
