import React, { Component } from "react";
import "./Index.css";
import { Form, Input, Button, Row, Col, Card, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CreateAcct = () => {
  const onFinish = (values) => {
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
          onFinish={onFinish}
        >
          <Form.Item
            style={{ color: "#566A7D" }}
            name="firstname"
            rules={[{ required: true, message: "This field is compulsory" }]}
            validateStatus="warning"
          >
            <label for="firstname" style={label}>
              First Name
            </label>
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="firstname"
            />
          </Form.Item>
          <Form.Item
            style={{ color: "#566A7D" }}
            name="lastname"
            rules={[{ required: true, message: "This field is compulsory" }]}
            validateStatus="warning"
          >
            <label for="lastname" style={label}>
              Last Name
            </label>
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="lastname"
            />
          </Form.Item>

          <label
            for="email"
            style={{
              color: "#566A7D",
              margin: 0,
              padding: 0,
              lineHeight: "30px",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            E-mail
          </label>
          <Form.Item
            style={{ color: "#566A7D" }}
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid E-mail",
              },
            ]}
            validateStatus="warning"
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
              type="email"
              name="email"
            />
          </Form.Item>
          <Form.Item
            style={{ color: "#566A7D" }}
            name="password"
            rules={[{ required: true, message: "This field is compulsory" }]}
            validateStatus="warning"
          >
            <label for="password" style={label}>
              Password
            </label>
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
            />
          </Form.Item>
          <Form.Item
            style={{ color: "#566A7D" }}
            name="password2"
            rules={[{ required: true, message: "This field is compulsory" }]}
            validateStatus="warning"
          >
            <label for="password2" style={label}>
              Password 2
            </label>
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
                  Create My account
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

const label = {
  margin: 0,
  padding: 0,
  lineHeight: "30px",
  fontSize: "14px",
  fontWeight: "700",
};

export default CreateAcct;
