import React, { Fragment, useEffect } from "react";
import {  Row, Col } from "antd";
import ActionCard from "../../../src/components/ActionCard";
import ImpactMap from "../../../src/components/ImpactMap";
import DoughnutChart from "../../../src/components/DoughnutChart";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getPrograms } from "../../actions/projectAction";
import { loadUser } from "../../actions/authAuctions";
import TopHeader from "../../../src/layouts/layout-components/header/TopHeader";
import SideBarPanel from "../../../src/layouts/layout-components/sidebar/SiderBarPanel";

export const Dashboard = (props) => {
  
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const { ServiceBase,  } = props;
    dispatch(getPrograms(ServiceBase));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, dispatch]);

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
                  <h4 className="page-title">Dashboard</h4>
                </div>
                <Fragment>
                  <ActionCard ServiceBase={ServiceBase} />
                  <div>
                    <Row>
                      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
                        <ImpactMap />
                      </Col>
                      <Col xs={{ span: 24 }} lg={{ span: 10 }}>
                        <DoughnutChart />
                      </Col>
                    </Row>
                  </div>
                </Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getPrograms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getPrograms })(Dashboard);
