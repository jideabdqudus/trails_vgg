import React, { useState } from "react";
import "./index.css";
import { Layout, Menu } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, loadUser } from "../../../actions/authAuctions";
import { Redirect } from "react-router";

const { Header } = Layout;
const { SubMenu } = Menu;

export const TopHeader = (props) => {
  const onLogout = () => {
    return <Redirect to="/login" />;
  };

  const [current, setCurrent] = useState("account");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Header className={"site-layout-background headerTop"}>
        <div>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <SubMenu
              key={"account"}
              // title={`${data.firstName} ${data.lastName}`}
            >
              <Menu.ItemGroup>
                <Menu.Item key="setting:1">Account Settings</Menu.Item>
                <Menu.Item key="setting:2">Status</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup>
                <Menu.Item key="setting:3" to="/" onClick={onLogout}>
                  Logout
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    </div>
  );
};

TopHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, loadUser })(TopHeader);
