import React from "react";
import { Row, Col } from "antd";
import LoginForm from "../../../src/components/LoginForm";

const Login = (props) => {
  return (
    <div>
      <LoginForm {...props}/>
    </div>
  );
};

export default Login;
