import React, { Component } from "react";
import "./index.css";
import { Form, Input, Button, Row, Col, Card, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="cardWrap">
      <div className="logo"></div>
      <Card className="cardHero">
        <h3 style={textLogin}>LOGIN</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
              type="email"
              name="email"
            />
          </Form.Item>
          <Form.Item style={{ color: "#0066f5" }} rules={[{ required: true }]}>
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
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
                  <Link to="/dashboard">Login to my account</Link>
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
        New User? <Link to="/create">Create Account</Link>
      </p>
    </div>
  );
};

const textLogin = {
  textAlign: "center",
  marginBottom: 10,
  paddingBottom: 10,
};

export default LoginForm;
