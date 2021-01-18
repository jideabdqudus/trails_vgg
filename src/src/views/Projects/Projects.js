import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import { TopHeader } from "../../../src/layouts/layout-components/header";
import { SideBar } from "../../../src/layouts/layout-components/sidebar";
import { FooterTab } from "../../../src/layouts/layout-components/footer";
import ProjectsCard from "../../components/ProjectsCard/index.js";
const { Content } = Layout;

export class Projects extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <SideBar />
            <Layout className="site-layout">
              <TopHeader />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>Projects</h1>
                <ProjectsCard />
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
