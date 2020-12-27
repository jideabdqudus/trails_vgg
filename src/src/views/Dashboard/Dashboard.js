import React, { Component, Fragment } from "react";
import { Layout, Row, Col } from "antd";

import { TopHeader } from "../../../src/layouts/layout-components/header";
import { SideBar } from "../../../src/layouts/layout-components/sidebar";
import { FooterTab } from "../../../src/layouts/layout-components/footer";
import { ActionCard } from "../../../src/components/ActionCard";
import { ImpactMap } from "../../../src/components/ImpactMap";
import { FundingGraph } from "../../../src/components/FundingGraph";
import { DoughnutChart } from "../../../src/components/DoughnutChart";

const { Content } = Layout;

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Fragment >
          <Layout style={{ minHeight: "100vh", marginLeft: "200px" }}>
            <SideBar />
            <Layout className="site-layout">
              <TopHeader />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>Dashboard</h1>
                <ActionCard />
                <div
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Row>
                    <Col span={14}>
                      <ImpactMap />
                      <FundingGraph />
                    </Col>
                    <Col span={10}>
                      <DoughnutChart />
                    </Col>
                  </Row>
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
