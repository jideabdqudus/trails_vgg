import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../Loader/Loader";
import ScrollToTop from "../ScrollToTop";
import Aux from "../hocs/_Aux";

import App from "../../App";
import Login from "../../views/Login/Login";
import CreateAccount from "../../views/Create/CreateAccount";
import PublishedForm from "../../views/PublishedForm";

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
                <Route exact path="/:id" render={(props) => <PublishedForm {...this.props} />}/>


                <Route path={"/"} exact render={(props) => <Login {...this.props} />} />

                <Route path={"/create"} exact render={(props) => <CreateAccount {...this.props}/>} />

               
                {/* This layout with house a layout containing all authenticated routes */}
                <Route
                  path="/app"
                  render={(props) => (
                    <App {...this.props} {...props} />
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

export default Layout;
