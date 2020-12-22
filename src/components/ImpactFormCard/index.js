import React, { Component } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  Radio,
  InputNumber,
} from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export class ImpactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredMark: "optional",
      programmeName: "",
      programmeCode: "",
      location: null,
      programmeDescription: "",
    };
  }

  continueToSustainableGoals = () => {
    const {
      programmeName,
      programmeCode,
      location,
      programmeDescription,
    } = this.state;

    let formRecord = {
      programmeName,
      programmeCode,
      location,
      programmeDescription,
    };

    this.props.history.push({
      pathname: "/dashboard/projects",
      state: formRecord,
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFinish = (values) => {
    console.log(values);
  };

  onRequiredTypeChange = ({ requiredMark }) => {
    this.setState({ requiredMark: requiredMark });
  };
  render() {
    const {
      programmeName,
      programmeCode,
      location,
      programmeDescription,
    } = this.state;
    return (
      <div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Card title={"Create your Custom Impact"}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={this.onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "programmeName"]}
                label="Programme Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={this.handleChange} />
              </Form.Item>
              <Form.Item
                name={["user", "programmeCode"]}
                label="Programme Code"
              >
                <Input onChange={this.handleChange} />
              </Form.Item>
              <Form.Item name={["user", "location"]} label="Location">
                <Input onChange={this.handleChange} />
              </Form.Item>
              <Form.Item
                name={["user", "programmeDescription"]}
                label="Programme Description"
              >
                <Input.TextArea onChange={this.handleChange} />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.continueToSustainableGoals}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default ImpactForm;
