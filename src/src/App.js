import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Projects from "./views/Projects/Projects";
import Overview from "./views/ProjectOverview/Overview";
import Manager from "./views/Impact/Manager";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/projects" component={Projects} />
            <Route
              exact
              path="/dashboard/projects/overview"
              component={Overview}
            />
            <Route exact path="/dashboard/manager" component={Manager} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
