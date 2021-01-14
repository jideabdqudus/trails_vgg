import React, { Component } from "react";
import "./index.css";
import { Form, Input, Button, Row, Col, Card, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <div className="loginBg">
        <div className="container">
          <Row className="loginRow">
            <Col span={12} className="loginHeading">
            <div>
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    color: "#0a2e65",
                    paddingTop: "0",
                    marginTop: "0",
                    lineHeight: "1.2rem",
                  }}
                >
                  Welcome back,
                </h1>
                <h1
                  style={{
                    color: "rgba(195, 205, 218, 1)",
                    fontWeight: "bold",
                    fontSize: "2.3rem",
                  }}
                >
                  Sign in to continue
                </h1>
              </div>
            </Col>
            <Col span={12} className="loginHeading">
              {" "}
              <div>
                <div className="cardWrap">
                  <div className="logo"></div>
                  <Card className="cardHero">
                    <h3 style={textLogin}>LOGIN</h3>
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
                        validateStatus={"warning"}
                      >
                        <Input
                          style={{
                            height: "50px",
                            borderRadius: "7px",
                            borderColor: "#0066f5",
                            fontSize: "1rem",
                            border: "1px solid rgba(10,46,101,.1)",
                          }}
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                          placeholder="Email Address"
                          type="email"
                          name="email"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        style={{ color: "#0066f5" }}
                        rules={[
                          { required: true, message: "Confirm your Input" },
                        ]}
                        validateStatus={"warning"}
                      >
                        <Input
                          style={{
                            height: "50px",
                            borderRadius: "7px",
                            borderColor: "#0066f5",
                            fontSize: "1rem",
                            border: "1px solid rgba(10,46,101,.1)",
                          }}
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </Form.Item>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                        validateStatus={"warning"}
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>
                      <br />
                      <br />
                      <Row>
                        <Col span={24}>
                          {" "}
                          <Form.Item>
                            <Button
                              type="primary"
                              block
                              htmlType="submit"
                              className="myBtn"
                            >
                              Login to my account
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Card>
                  <br />
                  <p style={textLogin}>
                    <Link>Forgot Password ?</Link>
                  </p>
                  <p style={{ textAlign: "center", color: "#fff" }}>
                    New User ? <Link to="/create">Create an Account</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

const textLogin = {
  textAlign: "center",
  marginBottom: 10,
  paddingBottom: 10,
};

export default LoginForm;
