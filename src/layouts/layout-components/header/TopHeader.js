/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "../../../assets/Trail2.svg";
import LogoMini from "../../../assets/Trail2.svg";
import Face from "../../../assets/face17.jpg";
import { Drawer, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logout, loadUser } from "../../../actions/authAuctions";
import { Redirect } from "react-router";
import { Link } from "@material-ui/core";
import { CLEAR_SESS } from "../../../constants/Types";
import { Fragment } from "react";

const TopHeader = (props) => {
  const { logout, user, loadUser, isAuthenticated, auth, history } = props;
  const { data } = auth;
  const { userData } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    // loadUser();
    //eslint-disable-next-line

    console.log("props in right menu", props);
  }, []);

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
              <Dropdown overlay={menu}>
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
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
            onClick={showDrawer}
          >
            <span className="mdi mdi-menu"></span>
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
