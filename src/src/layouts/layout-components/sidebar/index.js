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
      <div>
        <Sider
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            zIndex: 999,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
              Forms Management
            </Menu.Item>
            <Menu.Item key="5" icon={<ExportOutlined />}>
              Admin
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default SideBar;
