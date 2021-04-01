import React, { Component } from "react";
import Face from "../../../assets/face17.jpg";
import { Link } from "react-router-dom";

class SiderBarPanel extends Component {
  render() {
    return (
      <div>
        <nav
          className="sidebar sidebar-offcanvas"
          id="sidebar"
          style={{ position: "fixed", height: "100%" }}
        >
          <ul className="nav">
            <li className="nav-item nav-profile">
              <div className="nav-link">
                <div className="text-wrapper">
                  <p className="designation">Username </p>
                  <p className="profile-name">{`${
                    this.props.userData && this.props.userData.firstName
                  } ${this.props.userData && this.props.userData.lastName}`}</p>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/dashboard" key="1">
                <i className="menu-icon typcn typcn-document-text"></i>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/dashboard/projects" key="2">
                <i className="menu-icon typcn typcn-document-text"></i>
                <span className="menu-title">Programme Report</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/dashboard/manager" key="3">
                <i className="menu-icon typcn typcn-document-text"></i>
                <span className="menu-title">Programme Manager</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/app/dashboard/form" key="3">
                <i className="menu-icon typcn typcn-document-text"></i>
                <span className="menu-title">Forms Management</span>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
}

export default SiderBarPanel;
