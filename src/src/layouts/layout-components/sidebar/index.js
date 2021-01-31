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
        collapsible
        style={{
          border: "none",
          backgroundColor: "#001529",
          position: "fixed",
          zIndex: "999",
          height: "100vh",
        }}
      >
        <div className="logos"></div>
        <Menu theme="dark" mode="inline" style={{ backgroundColor: "#001529" }}>
          <Menu.Item to="/dashboard" key="1" icon={<PieChartOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/dashboard/projects">Programme Report</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<HighlightOutlined />}>
            <Link to="/dashboard/manager">Programme Manager</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FileOutlined />}>
            <Link to="/dashboard/form"></Link> Forms Management
          </Menu.Item>
          <Menu.Item key="5" icon={<ExportOutlined />}>
            Admin
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
