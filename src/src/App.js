import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import Overview from "./views/ProjectOverview/Overview";
import Manager from "./views/Impact/Manager";
import Login from "./views/Login/Login";
import setAuthToken from "../src/utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";
import CreateAccount from "./views/Create/CreateAccount";
import FormManager from "./views/FormManager/FormManager";
import FormBuild from "./views/FormBuilder/FormBuild";
import { appHelpers } from "./appHelpers/appHelpers";
import FormPreview from "./views/FormPreview";
import PublishedForm from "./views/PublishedForm";

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
//   console.log(localStorage.token)
// }

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      ServiceBase: null,
      userData: null,
    };
  }

  componentDidMount() {
    let token = JSON.parse(localStorage.getItem("TRAIL_TOKEN"));
    let user = JSON.parse(localStorage.getItem("TRAIL_USER"));
    if (token !== null && user !== null) {
      const AUTH_TOKEN = `${token}`;
      // the token in LocalStorage was set on Login
      this.setState({ token: AUTH_TOKEN, userData: user }, () => {
        this.setState({
          ServiceBase: this.props.Service(this.state.token, this.props.history),
        });
        this.setState({ sending: false });
      });
    } else {
      appHelpers.alertError("Invalid session, login again.");
      this.props.history.push("/");
    }

    // api call would be made to get detailed user information then the user state would be set and cascaded to all wrapper.
  }

  render() {
    const { ServiceBase, sending, userData } = this.state;
    return (
      <Provider store={store}>
        {ServiceBase !== null && sending === false && userData !== null && (
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            {/* <Route exact path="/create" component={CreateAccount} /> */}
            {/* <Route exact path="/app/dashboard" component={Dashboard} /> */}
            <Route
              exact
              path="/app/dashboard"
              render={(props) => (
                <Dashboard
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />

            <Route
              path="/app/dashboard/projects"
              exact
              render={(props) => (
                <Projects
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />
            <Route
              path="/app/dashboard/overview"
              exact
              render={(props) => (
                <Overview
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />
            <Route
              exact
              path="/app/dashboard/manager"
              render={(props) => (
                <Manager
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />
            <Route
              exact
              path="/app/dashboard/form"
              render={(props) => (
                <FormManager
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />
            <Route
              exact
              path="/app/dashboard/build_form"
              render={(props) => (
                <FormBuild
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />

            <Route
              exact
              path="/app/dashboard/form/preview/:id"
              render={(props) => (
                <FormPreview
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />

            <Route
              exact
              path="/app/form/:id"
              render={(props) => (
                <PublishedForm
                  {...props}
                  {...this.state}
                  userData={userData}
                  {...this.props}
                  ServiceBase={ServiceBase}
                  Constants={this.props.Constants}
                />
              )}
            />
          </Switch>
        )}
      </Provider>
    );
  }
}

export default App;
