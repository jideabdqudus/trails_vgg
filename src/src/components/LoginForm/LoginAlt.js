import React from "react";
import "./index.css";
import { Form, Input, Button, Row, Col, Card, Checkbox, Tabs } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/graphic_login.svg";

const { TabPane } = Tabs;

const LoginAlt = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <div className="loginAltBg" style={{ backgroundColor: "#064E89" }}>
        <Row>
          <Col
            span="10"
            style={{ backgroundColor: "white", height: "100vh" }}
            className="login_container"
          >
            <div className="left_container">
              <div>
                {" "}
                <h3
                  className="loginH3"
                  style={{ color: "#064E89", textAlign: "left" }}
                >
                  Get more things done with Loggin platform.
                </h3>
                <p className="loginP">
                  Access to the most powerfull tool in the entire design and web
                  industry.
                </p>
              </div>
              <img src={LoginImg} width="400px" />
            </div>
          </Col>
          <Col
            span={14}
            className="login_container"
            style={{ height: "100vh" }}
          >
            <div className="right_container">
              <div className="logo"></div>
              <div className="cardWrap">
                <div>
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
                    >
                      <Input
                        style={{
                          height: "50px",
                          borderRadius: "7px",
                          fontSize: "1rem",
                          border: "1px solid rgba(10,46,101,.1)",
                        }}
                        placeholder="Email Address"
                        type="email"
                        name="email"
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
                          height: "50px",
                          borderRadius: "7px",
                          fontSize: "1rem",
                          border: "1px solid rgba(10,46,101,.1)",
                        }}
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <br />
                    <br />
                    <Row>
                      <Col span={8}>
                        {" "}
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="myBtn"
                          >
                            Login
                          </Button>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        {" "}
                        <Link to="/">Forgot Password?</Link>
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

export default LoginAlt;
