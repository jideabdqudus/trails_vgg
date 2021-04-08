import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { BrowserRouter, Router } from "react-router-dom";
import store from "./store";

import "antd/dist/antd.css";
import history from "./history";
import configuration from "./configuration";
import { Provider } from "react-redux";
import Layout from "./components/hocs/Layout";
import * as Constants from "./Constants";
import { Service } from "./Services";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");

const instance = Axios.create({
  baseURL: "",
  headers: {},
});

instance
  .get("/config.json")
  .then((res) => {
    if (res.data && res.data.SERVICEBASEURI) {
      const config = res.data;

      sessionStorage.setItem("ApiBaseUrl", config.SERVICEBASEURI);

      ReactDOM.render(
        // <React.StrictMode>
        //   <App />
        // </React.StrictMode>
        <Provider store={store}>
          <Router history={history} basename={configuration.basename}>
            <>
              <Layout
                Constants={Constants}
                Service={Service.bind(null, config.SERVICEBASEURI, Axios)}
              />
              <ToastContainer style={{ width: "500px" }} limit={1} />
            </>
          </Router>
        </Provider>,
        rootElement
      );
    } else {
      console.log("Error:", "base API URL is missing..");
    }
  })
  .catch((err) => {});
