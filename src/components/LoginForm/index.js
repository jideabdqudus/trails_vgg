import React, { useState, useEffect } from "react";
import "./index.css";
import { Form, Input, Button, Row, Col, } from "antd";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/graphic_login.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alertActions";
import { login, clearErrors } from "../../actions/authAuctions";
import { Redirect } from "react-router";
import AlertInfo from "../Alert/index";

const LoginForm = (
  { setAlert, error, login, isAuthenticated, clearErrors, auth,  Service, Constants },
  props
) => {
  useEffect(() => {
    if (error) {
      setAlert(error.data.message, "error");
      clearErrors();
    } //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFinish = async () => {

    if (email === "") {
      setAlert("Please enter all fields", "error");
    } else if (password === "") {
      setAlert("Please enter all fields", "error");
    } else {
      const ServiceBase = Service(null,null)
      login(formData,ServiceBase,Constants );
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/app/dashboard" />;
  }
  return (
    <div>
      <div className="loginAltBg" style={{ backgroundColor: "#064E89" }}>
        <Row>
          <Col xs={{ span: 0 }} lg={{ span: 10 }} className="login_container">
            <div className="left_container">
              <div>
                {" "}
                <h3
                  className="loginH3"
                  style={{ color: "#064E89", textAlign: "left" }}
                >
                  Track your objectives using Trail.
                </h3>
                <p className="loginP">
                  Access to the most powerfull tool that allows you track your Objectives and Goals.
                </p>
              </div>
              <img src={LoginImg} width="350px" className="loginImg" alt="loginImage" />
            </div>
          </Col>
          <Col xs={{ span: 20 }} lg={{ span: 14 }} className="logins_container">
            <div className="right_container">
              <div className="logo"></div>
              <div className="cardWrap">
                <div style={{ marginBottom: "30px" }}>
                  <Link to="/login">
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "900",
                        color: "#fff",
                        paddingBottom: "10px",
                        marginRight: "20px",
                        borderBottom: "2px solid white",
                        marginBottom: "30px",
                      }}
                    >
                      Login
                    </span>
                  </Link>
                  <Link to="/signup">
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#5183AD",
                        paddingBottom: "10px",
                        marginRight: "20px",
                        borderBottom: "2px solid #5183AD",
                        marginBottom: "30px",
                      }}
                    >
                      Register
                    </span>
                  </Link>
                </div>
                <div>
                  <AlertInfo />
                  <br />
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Confirm your Input" },
                      ]}
                      style={{ marginBottom: "15px" }}
                    >
                      <Input
                        style={{
                          height: "40px",
                          borderRadius: "7px",
                          fontSize: "0.9rem",
                          border: "1px solid rgba(10,46,101,.1)",
                        }}
                        placeholder="E-mail Address"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        { required: true, message: "Confirm your Input" },
                      ]}
                    >
                      <Input.Password
                        style={{
                          height: "40px",
                          borderRadius: "7px",
                          fontSize: "0.9rem",
                          border: "1px solid rgba(10,46,101,.1)",
                        }}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Row>
                      <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                        {" "}
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="loginBtn"
                          >
                            Login
                          </Button>
                        </Form.Item>
                      </Col>
                      {/* <Col xs={{ span: 12 }} lg={{ span: 12 }}>
                        {" "}
                        <Link to="/">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="forgetBtn"
                          >
                            Forgot Password ?
                          </Button>
                        </Link>
                      </Col> */}
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};


LoginForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, login, clearErrors })(
  LoginForm
);
