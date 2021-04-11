/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../../../assets/Trail2.svg";
import LogoMini from "../../../assets/Trail2.svg";
import { Drawer, Menu, Dropdown } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logout, loadUser } from "../../../actions/authAuctions";
import { Link } from "@material-ui/core";
import { CLEAR_SESS } from "../../../constants/Types";

import "./index.css";

const TopHeader = (props) => {
  const { userData } = props;
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onLogout = () => {
    localStorage.clear();
    dispatch({
      type: CLEAR_SESS,
      payload: {},
    });
    props.history.push("/login");
  };

  const onDashboardClick = () => {
    props.history.push("/app/dashboard");
  };

  const onProgramClick = () => {
    props.history.push("/app/dashboard/projects");
  };

  const onManagerClick = () => {
    props.history.push("/app/dashboard/manager");
  };

  const onFormClick = () => {
    props.history.push("/app/dashboard/form");
  };

  const menu = (
    <Menu>
      <Menu.Item key="setting:5">
        <Link onClick={onLogout}>Logout</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <div className="navbar-brand brand-logo" href="index.html">
            <img src={Logo} alt="logo" />{" "}
          </div>
          <div className="navbar-brand brand-logo-mini">
            <img src={LogoMini} alt="logo" />{" "}
          </div>
        </div>

        <div className="navbar-menu-wrapper d-flex align-items-center">
          {/* <form className="ml-auto search-form d-none d-md-block" action="#">
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
              />
            </div>
          </form> */}
          <ul className="navbar-nav ml-auto">
            <li>
              <Dropdown overlay={menu} className="dropDownHidden">
                <a
                  className="nav-link dropdown-toggle"
                  id="UserDropdown"
                  href="#"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <span>{`${userData && userData.firstName} ${
                    userData && userData.lastName
                  }`}</span>
                </a>
              </Dropdown>

              <Drawer
                title={`${userData && userData.firstName} ${
                  userData && userData.lastName
                }`}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                style={{ zIndex: "9999" }}
              >
                <div className="drawerMenu">
                  <Link to="/app/dashboard" onClick={onDashboardClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Dashboard
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/dashboard/projects" onClick={onProgramClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Program Report
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/dashboard/manager" onClick={onManagerClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Programme Manager
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/dashboard/form" onClick={onFormClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Forms
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link onClick={onLogout}>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Logout
                    </span>
                  </Link>
                </div>
              </Drawer>
            </li>
          </ul>
          <button
            className="folderHidden"
            type="button"
            data-toggle="offcanvas"
            onClick={showDrawer}
          >
            <MenuFoldOutlined />
          </button>
        </div>
      </nav>
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
