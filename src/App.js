import React, { useState, Fragment } from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Container, Row, Col, Card } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  return (
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            Howfar
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "23px",
                padding: "16px",
                paddingLeft: "0px",
              }}
            >
              Dashboard
            </h1>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div>
              <Col span={24}>
                <Card
                  style={{
                    borderRadius: "10px",
                    marginBottom: "15px",
                    backgroundColor: "#2C7267",
                  }}
                >
                  <Row>
                    <Col span={6}>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "700",
                          fontSize: "10px",
                          color: "skyblue",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        Programmes
                      </span>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "35px",
                          color: "white",
                          marginBottom: "5px",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        3
                      </p>
                    </Col>

                    <Col span={6}>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "700",
                          fontSize: "10px",
                          color: "skyblue",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        Impact Targets (SDG)
                      </span>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "35px",
                          color: "white",
                          marginBottom: "5px",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        04
                      </p>
                    </Col>
                    <Col span={6}>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "700",
                          fontSize: "10px",
                          color: "skyblue",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        Amount Awarded
                      </span>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "35px",
                          color: "white",
                          marginBottom: "5px",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        ₦52.1B
                      </p>
                    </Col>
                    <Col span={6}>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "700",
                          fontSize: "10px",
                          color: "skyblue",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        Amount Disbursed
                      </span>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "35px",
                          color: "white",
                          marginBottom: "5px",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        ₦21.4B
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </div>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Row>
                <Col span={18}>
                  <Card style={{borderRadius:"10px"}}>Map</Card>
                </Col>
                <Col span={6}>Chart</Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default App;
