import React, { useState, useEffect } from "react";
import "./Index.css";
import { Form, Input, Button, Row, Col, Card, Checkbox, Tabs } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/graphic_login.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alertActions";
import { register, clearErrors } from "../../actions/authAuctions";
import { Redirect } from "react-router";
import AlertInfo from "../Alert/index";

const CreateAcct = (
  { setAlert, error, register, isAuthenticated, clearErrors },
  props
) => {
  // useEffect(() => {
  //   if (error === "User already exists") {
  //     setAlert(error, "error");
  //     clearErrors();
  //   } //eslint-disable-next-line
  // }, [error, isAuthenticated, props.history]);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFinish = async () => {
    if (firstname === "" || lastname === "" || email === "") {
      setAlert("Please enter all fields", "error");
    } else if (password.length < 8) {
      setAlert("Password must be more than 8 characters", "warning");
    } else if (password != password2) {
      setAlert("The passwords are different", "warning");
    } else {
      console.log(formData);
      register(formData);
    }
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

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
                  Track your objectives using Trails.
                </h3>
                <p className="loginP">
                  Access to the most powerfull tool in the youth and agor
                  sector.
                </p>
              </div>
              <img src={LoginImg} width="350px" className="loginImg" />
            </div>
          </Col>
          <Col xs={{ span: 20 }} lg={{ span: 14 }} className="logins_container">
            <div className="right_container">
              <div className="logo"></div>
              <div className="cardWrap">
                <div style={{ marginBottom: "30px" }}>
                  <Link to="/">
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
                      Login
                    </span>
                  </Link>
                  <Link to="/create">
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
                      Register
                    </span>
                  </Link>
                </div>
                <div>
                  <AlertInfo />
                  <br/>
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="firstname"
                      rules={[
                        { required: true, message: "This field is compulsory" },
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
                        placeholder="First Name"
                        name="firstname"
                        type="text"
                        value={firstname}
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Form.Item
                      name="lastname"
                      rules={[
                        { required: true, message: "This field is compulsory" },
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
                        placeholder="Last Name"
                        name="lastname"
                        type="text"
                        value={lastname}
                        onChange={onChange}
                      />
                    </Form.Item>
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
                        type="text"
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
                      <Input
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
                    <Form.Item
                      name="password2"
                      rules={[
                        { required: true, message: "Confirm your Input" },
                      ]}
                    >
                      <Input
                        style={{
                          height: "40px",
                          borderRadius: "7px",
                          fontSize: "0.9rem",
                          border: "1px solid rgba(10,46,101,.1)",
                        }}
                        type="password"
                        name="password2"
                        placeholder="Re-type Password"
                        value={password2}
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
                            Register
                          </Button>
                        </Form.Item>
                      </Col>
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

const textLogin = {
  textAlign: "center",
  marginBottom: 10,
  paddingBottom: 10,
};

CreateAcct.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register, clearErrors })(
  CreateAcct
);
