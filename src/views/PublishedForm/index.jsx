import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import FooterTab from "../../layouts/layout-components/footer";
import PublishedSection from "../../components/PublishedForm";

const PublishedForm = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content className="published-section-container">
        <PublishedSection service={props.Service(null, null)} />
      </Content>
      <FooterTab />
    </Layout>
  );
};



export default PublishedForm;
