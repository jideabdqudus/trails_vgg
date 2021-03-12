import React, { Fragment } from "react";
import FormIO from "../../components/FormIO/Index";
import { Layout, Row, Col } from "antd";

import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import CreateForm from "../../components/FormIO/CreateForm";

const { Content } = Layout;

const FormManager = (props) => {
  const {userData,history} = props
  return (
    <div>
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar userData={userData} history={history}/>
          <Layout className="site-layout">
            <Navbar userData={userData} history={history}/>
            <Content style={{ margin: "0 16px" }}>
              <h1 style={h1}>Form Manager</h1>
              <CreateForm />
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
