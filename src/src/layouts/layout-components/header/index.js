import React, { Component } from "react";
import "./index.css";
import { Layout, Menu, Avatar } from "antd";

const { Header } = Layout;
const { SubMenu } = Menu;

export class TopHeader extends Component {
  state = {
    current: "account",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <div>
        <Header className={"site-layout-background headerTop"}>
          <div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <SubMenu
                key={"account"}
                icon={<Avatar style={{ margin: "10px" }} />}
                title={"Abdul-Qudus Olajide"}
              >
                <Menu.ItemGroup>
                  <Menu.Item key="setting:1">Account Settings</Menu.Item>
                  <Menu.Item key="setting:2">Status</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup>
                  <Menu.Item key="setting:3">Logout</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </div>
        </Header>
      </div>
    );
  }
}

export default TopHeader;
