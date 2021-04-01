import React, { Fragment } from "react";
import FormIO from "../../components/FormIO/Index";
import { Layout, Row, Col } from "antd";

import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import CreateForm from "../../components/FormIO/CreateForm";
import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";
const { Content } = Layout;

const FormManager = (props) => {
  const { userData, history, ServiceBase } = props;
  return (
    <div class="container-scroller">
      <TopHeader {...props} userData={userData} history={history} />
      <div class="page-body-wrapper" style={{ marginTop: "60px" }}>
        <SideBarPanel userData={userData} history={history} />
        <div class="main-panel" style={{ marginLeft: "270px" }}>
          <div class="content-wrapper">
            <div class="row page-title-header">
              <div class="col-12">
                <div class="page-header">
                  <h4 class="page-title">Form Management</h4>
                </div>
                <Fragment>
                  <CreateForm service={ServiceBase} />
                </Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
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
