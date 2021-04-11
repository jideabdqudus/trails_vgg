import React, { Fragment } from "react";
import PreviewSection from "../../components/FormPreview";

import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

const FormPreview = (props) => {
  const { userData, history, ServiceBase } = props;

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
