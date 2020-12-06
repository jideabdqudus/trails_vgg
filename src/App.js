import React, { useState, Fragment } from "react";
import "./App.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Container,
  Row,
  Col,
  Card,
  Skeleton,
  Avatar,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  LogoutOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const data = {
  labels: [
    "No Poverty",
    "Zero Hunger",
    "Decent work and Economic Growth",
    "Quality Education",
  ],
  datasets: [
    {
      label: "SDGs",
      backgroundColor: ["#A21942", "#DDA63A", "#E5243B", "#C5192D"],
      hoverBackgroundColor: ["#A21942", "#DDA63A", "#E5243B", "#C5192D"],
      data: [65, 59, 80, 81],
    },
  ],
};

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
                  <Col span={16}></Col>
                  <Col spab={8}>
                    <Menu.Item key="mail">
                      <Avatar />
                      <span>Jide Abdul-Qudus</span>
                      <p>Administrator</p>
                    </Menu.Item>
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
                <Col span={14}>
                  <Card
                    title="Impact Areas"
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
                    title="Funding Status"
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
                <Col span={10}>
                  <Card
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#f0f2f5",
                      margin: "10px",
                      marginRight: "30px",
                    }}
                    title="Impact Summary"
                  >
                    <Doughnut
                      data={data}
                      width={100}
                      height={100}
                      options={{
                        legend: {
                          display: true,
                          position: "bottom",
                        },
                      }}
                    />
                  </Card>
                </Col>
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
