import React, { useState, Fragment } from "react";
import "./App.css";
import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  Avatar,
  Button,
  message,
  Form,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import First from "../src/layouts/Steps/First";
import Second from "../src/layouts/Steps/Second";
import Third from "../src/layouts/Steps/Third";
import Steps from "../src/steps/main";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

// const { Step } = Steps;

// const steps = [
//   {
//     title: "First",
//     content: <First />,
//   },
//   {
//     title: "Second",
//     content: <Second />,
//   },
//   {
//     title: "Last",
//     content: <Third />,
//   },
// ];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };
  const onFinish = (values) => {
    console.log(values);
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
              <Menu mode="horizontal">
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
              Programme Manager
            </h1>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Card>
                <Meta
                  title="Create your custom Impact"
                  description="Design your own impact profile based on your programme priorities and needs"
                />
                <br />
                <div className="my-app">
                  <Steps />
                </div>
              </Card>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Trails ©2020</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default App;
