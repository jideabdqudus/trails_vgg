import React from "react";
import { Form, Input, Button, Checkbox } from "antd";


const Third = () => {
 
  return (
    <div>
      <Form.Item
        label="Text"
        name="Text"
        rules={[
          {
            required: true,
            message: "Please input a note",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
    </div>
  );
};

export default Third;
