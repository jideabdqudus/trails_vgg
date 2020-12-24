import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import { Field } from "@progress/kendo-react-form";
const First = () => {
  

  return (
    <Field>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Field>
  );
};

export default First;
