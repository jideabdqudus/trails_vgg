import React, { Component } from "react";
import "./Index.css";
import { Form, Input, Button, Row, Col, Card, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CreateAcct = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="cardWrap">
      <div className="logo"></div>
      <Card className="cardHero">
        <h3 style={textLogin}>CREATE YOUR ACCOUNT</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            rules={[
              { required: true, message: "Please input your First Name" },
            ]}
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
              placeholder="First Name"
              name="firstname"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Last Name" }]}
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
              placeholder="Last Name"
              name="lastname"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your Email" }]}
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
              name="password2"
              placeholder="Re-enter Password"
            />
          </Form.Item>
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
                  <Link>Create My account</Link>
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <br />
      <p style={{ textAlign: "center", color: "#fff" }}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

const textLogin = {
  textAlign: "center",
  marginBottom: 10,
  paddingBottom: 10,
};

export default CreateAcct;
