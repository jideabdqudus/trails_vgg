import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../../routes";
// import Header from '../Header/Header';
import PropTypes from 'prop-types'
// import Navigation from "../Navigation";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
// import windowSize from "react-window-size";
// import actionTypes from "../../logic/actions/actionTypes";
// import Fullscreen from "react-full-screen";
// import Breadcrumb from "../Breadcrumb";
import ScrollToTop from "../ScrollToTop";
import { ImpactMap } from "../ImpactMap";
import { ActionCard } from "../ActionCard";
import Layout, { Content } from "antd/lib/layout/layout";
import { Fragment } from "react";
import SideBar from "../../layouts/layout-components/sidebar";
import { DoughnutChart } from "../DoughnutChart";
import FooterTab from "../../layouts/layout-components/footer";
import { Col, Row } from "antd";
import Navbar from "../../layouts/layout-components/menu";
import { loadUser } from "../../actions/authAuctions";
import { getPrograms } from "../../actions/projectAction";
import { Dashboard } from "../../views/Dashboard/Dashboard";
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
    };
  }

  componentDidMount() {
    getPrograms(this.props.auth.data.accessToken);

    console.log("props--dashboard",this.props)
  }
  render() {
    const menu = routes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} {...this.props} />}
        />
      ) : null;
    });
    return (
      <>
       {/* <Dashboard {...this.props} {...this.state}/> */}
       {menu}
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     defaultPath: state.navigation.defaultPath,
//     isFullScreen: state.navigation.isFullScreen,
//     collapseMenu: state.navigation.collapseMenu,
//     configBlock: state.navigation.configBlock,
//     layout: state.navigation.layout,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFullScreenExit: () => dispatch({ type: actionTypes.FULL_SCREEN_EXIT }),
//     onComponentWillMount: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
//   };
// };

Wrapper.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getPrograms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getPrograms })(Wrapper);

const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
