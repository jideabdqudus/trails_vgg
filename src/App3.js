import React, { useState, Fragment } from "react";
import "./App.css";
import { Layout, Menu, Row, Col, Card, Skeleton, Avatar } from "antd";
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
  const [current, setCurrent] = useState("mail");

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };
  return (
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Programme Report
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="Programme Manager"
            >
              <Menu.Item key="3">SDG 3</Menu.Item>
              <Menu.Item key="4">SDG 6</Menu.Item>
              <Menu.Item key="5">SDG 13</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<TeamOutlined />}
              title="Forms Management"
            >
              <Menu.Item key="6">Poverty Alleviation</Menu.Item>
              <Menu.Item key="8">Empowerment Scheme</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Admin
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              borderRadius: "0",
              padding: 0,
            }}
          >
            <div>
              <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
              >
                <Row>
                  <Col span={18}></Col>
                  <Col span={6}>
                    <Avatar /> {"    "}
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Jide Abdul-Qudus | {"  "}
                    </span>
                    <span
                      style={{
                        fontSize: "8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      Administrator
                    </span>
                  </Col>
                </Row>
              </Menu>
            </div>
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
              NIGERIA YOUTH INVESTMENT FUND
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
                    backgroundColor: "#424D79",
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
                        No of SDGs
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
                        1
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
                        Indicators
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
                        6
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
                        Total Beneficiaries
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
                        14,500
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
                        Awarded
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
                        ₦25B
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
              <h1> PERFORMANCE INDICATORS</h1>
              <Row>
                <Col span={12}>
                  <Card
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#f0f2f5",
                      margin: "10px",
                      marginRight: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    <Skeleton active />
                  </Card>
                  <Card
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#f0f2f5",
                      margin: "10px",
                      marginRight: "30px",
                    }}
                  >
                    <Skeleton active />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#f0f2f5",
                      margin: "10px",
                      marginRight: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    <Skeleton active />
                  </Card>
                  <Card
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#f0f2f5",
                      margin: "10px",
                      marginRight: "30px",
                    }}
                  >
                    <Skeleton active />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Trails ©2020</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default App;
