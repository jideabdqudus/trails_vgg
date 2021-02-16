import React, { useEffect } from "react";
import "./index.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, loadUser } from "../../../actions/authAuctions";
import { Redirect } from "react-router";

import { Menu, Grid } from "antd";
import { Link } from "@material-ui/core";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

export const RightMenu = (
  { logout, user, loadUser, isAuthenticated, auth },
  props
) => {
  const { data } = auth;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
    console.log(data);
  }, []);

  const onLogout = () => {
    return <Redirect to="/" />;
  };

  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <SubMenu key="sub1" title={`${data.firstName} ${data.lastName}`}>
        <Menu.Item key="setting:1">Settings</Menu.Item>
        <Menu.Item key="setting:2">
          <Link to="/">Logout</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

RightMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, loadUser })(RightMenu);
