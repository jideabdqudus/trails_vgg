import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import "./index.css";
import TrailLogo from "../../../assets/Trail2.svg"

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="menuCon" style={{ marginLeft: "20px" }}>
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <div className="barsMenuLogo" style={{ float: "right" }}>
            <img src={TrailLogo} alt="Trail Logo" width="100px"/>
          </div>

          <Drawer
            title="Account"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            bodyStyle={{ backgroundColor: "#001529" }}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
