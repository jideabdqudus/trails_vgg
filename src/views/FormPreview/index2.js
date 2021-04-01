import React, { Fragment } from "react";
import { Layout } from "antd";
import Navbar from "../../layouts/layout-components/menu";
import SideBar from "../../layouts/layout-components/sidebar";
import FooterTab from "../../layouts/layout-components/footer";
import PreviewSection from '../../components/FormPreview'

import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

const { Content } = Layout;

const { userData, history, ServiceBase } = props;


const FormPreview = ({ServiceBase,userData}) => {
  console.log(ServiceBase)
  return (
    <div>
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar userData={userData} />
          <Layout className="site-layout">
            <Navbar userData={userData} />
            <Content style={{ margin: "0 16px" }}>
              <h1 style={h1}>Forms Management</h1> 
              <PreviewSection service={ServiceBase} />
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
