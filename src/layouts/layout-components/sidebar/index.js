import React, { Component } from "react";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  HighlightOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import LogoTrail from "../../../assets/Trail2.svg";

const { Sider } = Layout;

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed: collapsed });
  };
  render() {
    return (
      <Sider
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        className="display-sider"
        style={{
          border: "none",
          backgroundColor: "#001529",
          position: "fixed",
          zIndex: "999",
          height: "100vh",
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          style={{ backgroundColor: "#001529", marginTop: "100px" }}
        >
          <div className="logos"></div>
          <Menu.Item
            to="/app/dashboard"
            key="1"
            icon={<PieChartOutlined />}
            style={{ marginBottom: "20px" }}
          >
            <Link to="/app/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            to="/app/dashboard/projects"
            icon={<DesktopOutlined />}
            style={{ marginBottom: "20px" }}
          >
            <Link to="/app/dashboard/projects">Programme Report</Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<HighlightOutlined />}
            style={{ marginBottom: "20px" }}
            to="/app/dashboard/manager"
          >
            <Link to="/app/dashboard/manager">Programme Manager</Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<FileOutlined />}
            style={{ marginBottom: "20px" }}
            to="/app/dashboard/manager"
          >
            <Link to="/app/dashboard/form"></Link> Forms Management
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
