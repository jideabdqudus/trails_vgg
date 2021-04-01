import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../layouts/layout-components/sidebar";
import FooterTab from "../../layouts/layout-components/footer";
import ImpactManager from "../../components/ImpactManager/ImpactManager";

import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

const { Content } = Layout;

export class Projects extends Component {
  render() {
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
                    <h4 class="page-title">Impact Manager</h4>
                  </div>
                  <Fragment>
                    <div>
                      <ImpactManager {...this.props} />
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

export default Projects;

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
