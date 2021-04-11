import React from "react";
import { Route, } from "react-router-dom";
import routes from "../../routes";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { loadUser } from "../../actions/authAuctions";
import { getPrograms } from "../../actions/projectAction";
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
    };
  }

  componentDidMount() {
    getPrograms(this.props.auth.data.accessToken);
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

