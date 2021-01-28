import React, { Fragment } from "react";
import FormIO from "../../components/FormIO/Index";
import { Layout, Row, Col } from "antd";

import TopHeader from "../../../src/layouts/layout-components/header";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import CreateForm from "../../components/FormIO/CreateForm";
import BuildForm from "../../components/FormBuilder.js/BuildForm";

const { Content } = Layout;

const FormBuild = () => {
  return (
    <div>
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar />
          <Layout className="site-layout">
            <TopHeader />
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
};

export default FormBuild;

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
