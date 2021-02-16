import React, { Component, Fragment } from "react";
import { Layout, Row, Col } from "antd";

import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import IndicatorsCard from "../../components/IndicatorsCard";
import Indicators from "../../components/PerformanceIndicators";
const { Content } = Layout;

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <SideBar />
            <Layout className="site-layout">
              <Navbar />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>NIGERIA YOUTH INVESTMENT FUND</h1>
                <div>
                  <IndicatorsCard />
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

export default Dashboard;

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
