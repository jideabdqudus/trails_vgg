import React, { Fragment } from "react";
import { Layout } from "antd";
import Navbar from "../../layouts/layout-components/menu";
import SideBar from "../../layouts/layout-components/sidebar";
import FooterTab from "../../layouts/layout-components/footer";
import PreviewSection from "../../components/FormPreview";

import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

const { Content } = Layout;

const FormPreview = (props) => {
  const { userData, history, ServiceBase } = props;

  console.log(ServiceBase);
  return (
    <div className="container-scroller">
      <TopHeader {...props} userData={userData} history={history} />
      <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
        <SideBarPanel userData={userData} history={history} />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                <div className="page-header">
                  <h4 className="page-title">Forms Management</h4>
                </div>
                <Fragment>
                  <PreviewSection service={ServiceBase} />
                </Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
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
