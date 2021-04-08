import React from "react";
import { Switch } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";

class AuthenticatedLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { userobj: {} },
      token: "",
      sending: true,
      page: {},
      showSideBar: false,
      permissions: [],
    };
  }

  componentWillMount() {
    // check if the user is authenticated. e.g if the token exist in localStorage or any where else
    // if token doesn't exist, reroute to login
  }
  componentDidMount() {
    // let user = {};
    let tk = JSON.parse(localStorage.getItem("TRAIL_TOKEN"));
    let email = JSON.parse(localStorage.getItem("TRAIL_EMAIL"));
    const AUTH_TOKEN = `${tk}`;

    // the token in LocalStorage was set on Login
    this.setState({ token: AUTH_TOKEN });
    this.setState({ ServiceBase: this.props.Service(this.state.token) });
    this.setState({ sending: false });

    // api call would be made to get detailed user information then the user state would be set and cascaded to all wrapper.
  }

  logout = () => {
    this.setState({ sending: true }, () => {
      setTimeout(() => {
        localStorage.clear();
        this.props.history.push("/");
      }, 1000);
    });
  };

  render() {
    console.log("authorized layout state", this.state);
    return (
      <div>
        {this.state.sending && <div>Loading</div>}
        {!this.state.sending && <Wrapper {...this.state} {...this.props} />}
      </div>
    );
  }
}
export { AuthenticatedLayout };
