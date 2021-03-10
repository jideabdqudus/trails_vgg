import React, { Component, Fragment } from "react";
import { Layout, Row, Col } from "antd";

import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import IndicatorsCard from "../../components/IndicatorsCard";
import Indicators from "../../components/PerformanceIndicators";
import axios from "axios";
import { appConstants } from "../../constants/app.constants";
import { connect } from "react-redux";
import { appHelpers } from "../../appHelpers/appHelpers";
const { Content } = Layout;

export class Overview extends Component {
  constructor(props){
    super(props);
    this.state={
      projectDetails:{}
    }
  }

  componentDidMount =() =>{
    console.log("details",this.props.location.state.detail)
    if(this.props.location && this.props.location.state && this.props.location.state.detail){
      const {detail} = this.props.location.state
    axios({
      method: "GET",
      url:  `http://trail-api.test.vggdev.com/${appConstants.PROGRAMS}/${detail}`,
       headers: { accessToken: this.props.auth.data.accessToken},
    })
    .then(({data})=>{
      console.log("data",data)
      this.setState({projectDetails:data.data},()=>{
        this.setState({loading:false})
      })
    })
  }else{
    this.props.history.push("/dashboard/projects")
  }
  }
  render() {

    const {projectDetails} = this.state
    return (
      <div>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <SideBar />
            <Layout className="site-layout">
              <Navbar />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>NIGERIA YOUTH INVESTMENT FUND</h1>
                <div>
                  <IndicatorsCard 
                  sdgCount={projectDetails.sdgs && projectDetails.sdgs.length}
                  indicatorCount={appHelpers.countProjectIndicators(projectDetails.sdgs && projectDetails.sdgs)}
                  />
                </div>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <div>
                    <Indicators />
                  </div>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Overview)

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
