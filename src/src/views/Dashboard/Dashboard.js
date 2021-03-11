import React, { useEffect, Fragment, useState } from "react";
import { Layout, Row, Col } from "antd";
import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import ActionCard from "../../../src/components/ActionCard";
import ImpactMap from "../../../src/components/ImpactMap";
import FundingGraph from "../../../src/components/FundingGraph";
import DoughnutChart from "../../../src/components/DoughnutChart";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getPrograms } from "../../actions/projectAction";
import { loadUser } from "../../actions/authAuctions";
import axios from "axios";
import { appConstants } from "../../constants/app.constants";

const { Content } = Layout;

const Dashboard = () =>{ 
  const {token} = useSelector(state => state.auth)
  const dispatch = useDispatch()  
  
  useEffect(() => {
    dispatch(getPrograms(token))
  },[token,dispatch])

  return (
      <div>
        <Fragment>
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <SideBar />
            <Layout className="site-layout">
              <Navbar />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>Dashboard</h1>
                <ActionCard />
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
              </Content>
              <FooterTab />
            </Layout>
          </Layout>
        </Fragment>
      </div>
    )
}
  

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getPrograms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getPrograms })(Dashboard);

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
