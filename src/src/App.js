import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import Overview from "./views/ProjectOverview/Overview";
import Manager from "./views/Impact/Manager";
import Login from "./views/Login/Login";
import setAuthToken from "../src/utils/setAuthToken"
import { Provider } from "react-redux";
import store from "./store";
import CreateAccount from "./views/Create/CreateAccount";
import FormManager from "./views/FormManager/FormManager";
import FormBuild from "./views/FormBuilder/FormBuild";
import FormPreview from './views/FormPreview';
import PublishedForm from './views/PublishedForm';

if (localStorage.token) {
  setAuthToken(localStorage.token);
  console.log(localStorage.token)
}


export class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/form/:id" component={PublishedForm} />
            <Route exact path="/create" component={CreateAccount} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/projects" component={Projects} />
            <Route
              exact
              path="/dashboard/projects/overview"
              component={Overview}
            />
            <Route exact path="/dashboard/manager" component={Manager} />
            <Route exact path="/dashboard/form" component={FormManager} />
            <Route exact path="/dashboard/build_form" component={FormBuild} />
            <Route exact path="/dashboard/form/preview/:id" component={FormPreview} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
