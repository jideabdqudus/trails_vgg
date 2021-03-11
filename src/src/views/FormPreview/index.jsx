import React, { Fragment } from "react";
import { Layout } from "antd";
import Navbar from "../../layouts/layout-components/menu";
import SideBar from "../../layouts/layout-components/sidebar";
import FooterTab from "../../layouts/layout-components/footer";
import PreviewSection from '../../components/FormPreview'

const { Content } = Layout;

const FormPreview = () => {
  return (
    <div>
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar />
          <Layout className="site-layout">
            <Navbar />
            <Content style={{ margin: "0 16px" }}>
              <h1 style={h1}>Forms Management</h1> 
              <PreviewSection />
            </Content>
            <FooterTab />
          </Layout>
        </Layout>
      </Fragment>
    </div>
  );
};

export default FormPreview;

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
