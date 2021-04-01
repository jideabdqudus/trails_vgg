import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../layouts/layout-components/sidebar";
import FooterTab from "../../layouts/layout-components/footer";
import ImpactManager from "../../components/ImpactManager/ImpactManager";
const { Content } = Layout;

export class Projects extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <SideBar userData={this.props.userData} history={this.props.history}/>
            <Layout className="site-layout">
              <Navbar userData={this.props.userData} history={this.props.history}/>
              <Content style={{ margin: "0 16px" }}>
                {/* {window.location.href.indexOf("Trails") > -1 ? "Trails" : "Signals"} */}
                <h1 style={h1}>Impact Manager</h1>
                <div>
                  <ImpactManager  {...this.props}/>
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

export default Projects;

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
