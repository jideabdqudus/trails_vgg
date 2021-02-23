import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../Loader";
import { AuthenticatedLayout } from "./AuthenticatedLayout";
import ScrollToTop from "../ScrollToTop";
import Aux from "../hocs/_Aux";
import { createStore } from "@spyna/react-store";
import UserLogin from "../UserLogin/Login";
import ResetPassword from "../ResetPassword/ResetPassword";
import UpdatePassword from "../UpdatePassword/UpdatePassword";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Aux>
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Router>
                {/* All unthenticated Routes will go here */}
                {/* login, reset-password, update-password */}

                <Route path={"/"} exact render={(props) => <UserLogin />} />

                <Route
                  path={"/reset-password"}
                  exact
                  render={(props) => <ResetPassword />}
                />

                <Route
                  path={"/update-password"}
                  exact
                  render={(props) => <UpdatePassword />}
                />

                {/* This layout with house a layout containing all authenticated routes */}
                <Route
                  path="/app"
                  render={(props) => (
                    <AuthenticatedLayout {...this.props} {...props} />
                  )}
                />
              </Router>
            </Switch>
          </Suspense>
        </ScrollToTop>
      </Aux>
    );
  }
}
const initialValue = {
  userData: {
    firstname: "John",
  },
  impactManager: {
    name: "",
    description: "",
    code: "",
    projectLocation: "",
    sdgs: [],
    indicators: [],
  },
};

export default createStore(Layout, initialValue);
