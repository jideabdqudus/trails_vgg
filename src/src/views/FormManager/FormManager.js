import React, {Fragment} from "react";
import FormIO from "../../components/FormIO/Index";
import { Layout, Row, Col } from "antd";

import { TopHeader } from "../../../src/layouts/layout-components/header";
import { SideBar } from "../../../src/layouts/layout-components/sidebar";
import { FooterTab } from "../../../src/layouts/layout-components/footer";

const { Content } = Layout;


const FormManager = () => {
  return (
    <div>
      <Fragment>
        <Layout style={{ minHeight: "100vh", marginLeft: "200px" }}>
          <SideBar />
          <Layout className="site-layout">
            <TopHeader />
            <Content style={{ margin: "0 16px" }}>
              <h1 style={h1}>Form Manager</h1>

              <FormIO />
            </Content>
            <FooterTab />
          </Layout>
        </Layout>
      </Fragment>
    </div>
  );
};

export default FormManager;

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
