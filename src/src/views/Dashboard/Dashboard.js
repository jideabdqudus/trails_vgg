import React, { Component, Fragment } from "react";
import { Layout, Row, Col } from "antd";
import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import ActionCard from "../../../src/components/ActionCard";
import ImpactMap from "../../../src/components/ImpactMap";
import FundingGraph from "../../../src/components/FundingGraph";
import DoughnutChart from "../../../src/components/DoughnutChart";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPrograms } from "../../actions/projectAction";
import { loadUser } from "../../actions/authAuctions";
import axios from "axios";

const { Content } = Layout;

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // data = this.props
  // componentDidMount() {

  // }

  componentDidMount() {
    console.log("props in dashboard", this.props);
    const { ServiceBase, Constants } = this.props;
    getPrograms(this.props.auth.data.accessToken, ServiceBase, Constants);

    // no more needed
    const config = {
      headers: {
        "Content-Type": "application/json",
        accessToken: this.props.auth.data.accessToken,
      },
    };
  }
  render() {
    return (
      <div>
        <Fragment>
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <SideBar
              userData={this.props.userData}
              history={this.props.history}
            />
            <Layout className="site-layout">
              <Navbar
                {...this.props}
                userData={this.props.userData}
                history={this.props.history}
              />
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
    );
  }
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
