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
  Button,
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
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
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
              Projects
            </h1>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div>
              <Row>
                <Col span={8}>
                  <Card
                    style={{ margin:"20px",  borderRadius: "10px" }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <Button
                        shape="round"
                        type="primary"
                        style={{
                          backgroundColor: "#53D1BE",
                          borderColor: "#53D1BE",
                        }}
                      >
                        Overview
                      </Button>,
                    ]}
                  >
                    <Meta
                      // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title="Home Grown School Feeding"
                      description="HGSF"
                    />
                    <div>
                      <Row style={{ marginTop: "10px" }}>
                        <Col span={12}>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontWeight: "700",
                              fontSize: "8px",
                              color: "grey",
                            }}
                          >
                            Location
                          </span>
                          <p
                            style={{
                              fontSize: "8px",
                              color: "black",
                            }}
                          >
                            Nigeria
                          </p>
                        </Col>
                        <Col span={12}>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontWeight: "700",
                              fontSize: "8px",
                              color: "grey",
                            }}
                          >
                            Impact
                          </span>
                          <p
                            style={{
                              fontSize: "8px",
                              color: "black",
                            }}
                          >
                            SDG2, SDG4
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    style={{ margin:"20px",  borderRadius: "10px" }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <Button
                        shape="round"
                        type="primary"
                        style={{
                          backgroundColor: "#53D1BE",
                          borderColor: "#53D1BE",
                        }}
                      >
                        Overview
                      </Button>,
                    ]}
                  >
                    <Meta
                      // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title="Home Grown School Feeding"
                      description="HGSF"
                    />
                    <div>
                      <Row style={{ marginTop: "10px" }}>
                        <Col span={12}>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontWeight: "700",
                              fontSize: "8px",
                              color: "grey",
                            }}
                          >
                            Location
                          </span>
                          <p
                            style={{
                              fontSize: "8px",
                              color: "black",
                            }}
                          >
                            Nigeria
                          </p>
                        </Col>
                        <Col span={12}>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontWeight: "700",
                              fontSize: "8px",
                              color: "grey",
                            }}
                          >
                            Impact
                          </span>
                          <p
                            style={{
                              fontSize: "8px",
                              color: "black",
                            }}
                          >
                            SDG2, SDG4
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    style={{ margin:"20px",  borderRadius: "10px" }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <Button
                        shape="round"
                        type="primary"
                        style={{
                          backgroundColor: "#53D1BE",
                          borderColor: "#53D1BE",
                        }}
                      >
                        Overview
                      </Button>,
                    ]}
                  >
                    <Meta
                      // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title="Home Grown School Feeding"
                      description="HGSF"
                    />
                    <div>
                      <Row style={{ marginTop: "10px" }}>
                        <Col span={12}>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontWeight: "700",
                              fontSize: "8px",
                              color: "grey",
                            }}
                          >
                            Location
                          </span>
                          <p
                            style={{
                              fontSize: "8px",
                              color: "black",
                            }}
                          >
                            Nigeria
                          </p>
                        </Col>
                        <Col span={12}>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontWeight: "700",
                              fontSize: "8px",
                              color: "grey",
                            }}
                          >
                            Impact
                          </span>
                          <p
                            style={{
                              fontSize: "8px",
                              color: "black",
                            }}
                          >
                            SDG2, SDG4
                          </p>
                        </Col>
                      </Row>
                    </div>
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
