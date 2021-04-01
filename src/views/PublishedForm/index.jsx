import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import FooterTab from "../../layouts/layout-components/footer";
import Navbar from "../../layouts/layout-components/menu";
import SideBar from "../../layouts/layout-components/sidebar";
import PublishedSection from "../../components/PublishedForm";
import { dummyForms } from "../../components/FormIO/constants";
import { startCase } from "lodash";

const PublishedForm = (props) => {
  console.log(props);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content className="published-section-container">
        <PublishedSection service={props.Service(null, null)} />
      </Content>
      <FooterTab />
    </Layout>
  );
};

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};

export default PublishedForm;
