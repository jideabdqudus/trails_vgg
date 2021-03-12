import React, { Fragment } from "react";
import FormIO from "../../components/FormIO/Index";
import { Layout, Row, Col } from "antd";
import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import CreateForm from "../../components/FormIO/CreateForm";
import BuildForm from "../../components/FormBuilder.js/BuildForm";

const { Content } = Layout;

class FormBuild extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <SideBar
              userData={this.props.userData}
              history={this.props.history}
            />
            <Layout className="site-layout">
              <Navbar
                userData={this.props.userData}
                history={this.props.history}
              />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>Form Manager</h1>
                <BuildForm />
              </Content>
              <FooterTab />
            </Layout>
          </Layout>
        </Fragment>
      </div>
    );
  }
}
export default FormBuild;

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
