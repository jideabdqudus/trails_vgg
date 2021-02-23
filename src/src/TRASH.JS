////TRASH CODE


import React, { Component } from "react";
import "./index.css";
import { Layout, Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const data = [
  {
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Home Grown School Feeding",
    description: "HGSF",
    location: "Nigeria",
    impact: "SDG2",
  },
  {
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Reduced Inequalities",
    description: "HGSF",
    location: "Ghana",
    impact: "SDG1",
  },
  {
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Affordable Health Care",
    description: "JOI",
    location: "Nigeria",
    impact: "SDG2, SDG4",
  },
  {
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Clean Water",
    description: "JOI",
    location: "Nigeria",
    impact: "SDG2, SDG4",
  },
];

export class ProjectsCard extends Component {
  render() {
    return (
      <div>
        <Row>
          {data.map((project) => (
            <div>
              <Col>
                <Card
                  className={"projectCard"}
                  cover={<img alt={project.title} src={project.image} />}
                  actions={[
                    <Link to={"/dashboard/projects/overview"}>
                      <Button
                        shape="round"
                        type="primary"
                        className={"projectButton"}
                      >
                        Overview
                      </Button>
                    </Link>,
                  ]}
                >
                  <Meta
                    title={project.title}
                    description={project.description}
                  />
                  <div>
                    <Row style={{ marginTop: "10px" }}>
                      <Col span={12}>
                        <span className={"projectSpan"}>Location</span>
                        <p className={"projectParagraph"}>{project.location}</p>
                      </Col>
                      <Col span={12}>
                        <span className={"projectSpan"}>Impact</span>
                        <p className={"projectParagraph"}>{project.impact}</p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default ProjectsCard;



const data = [
  {
    "title": "Register",
    "display": "form",
    "type": "form",
    "name": "register",
    "path": "register",
    "components": [{
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "First Name",
        "key": "firstName",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "validate": {
            "required": false,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
        },
        "conditional": {
            "show": "",
            "when": null,
            "eq": ""
        },
        "type": "textfield",
        "tags": [],
        "lockKey": true,
        "isNew": false
    }, {
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Last Name",
        "key": "lastName",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "validate": {
            "required": false,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
        },
        "conditional": {
            "show": "",
            "when": null,
            "eq": ""
        },
        "type": "textfield",
        "tags": [],
        "lockKey": true,
        "isNew": false
    }, {
        "input": true,
        "tableView": true,
        "inputType": "email",
        "label": "Email",
        "key": "email",
        "placeholder": "Enter your email address",
        "prefix": "",
        "suffix": "",
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "kickbox": {
            "enabled": false
        },
        "type": "email",
        "lockKey": true,
        "isNew": false
    }, {
        "input": true,
        "tableView": true,
        "inputMask": "(999) 999-9999",
        "label": "Phone Number",
        "key": "phoneNumber",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "protected": false,
        "unique": false,
        "persistent": true,
        "defaultValue": "",
        "validate": {
            "required": false
        },
        "type": "phoneNumber",
        "conditional": {
            "eq": "",
            "when": null,
            "show": ""
        },
        "tags": [],
        "lockKey": true,
        "isNew": false
    }, {
        "input": true,
        "label": "Submit",
        "tableView": false,
        "key": "submit",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button"
    }
]















import React, { useState, useEffect, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Divider,
  Space,
} from "antd";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Link } from "react-router-dom";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const { Option } = Select;

const areas = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
];

const BuildForm = ({ project }) => {
  const [form] = Form.useForm();

  const [formData, setFormData] = useState({
    title: "",
    display: "form",
    type: "form",
    name: "",
    path: "",
    programme: "",
    instruction: "",
    question: "",
    inputIndicator: "",
    target: "",
  });

  const {
    title,
    programme,
    instruction,
    question,
    inputIndicator,
    target,
    name,
    path,
    type,
    display,
  } = formData;
  const { projects, indicator } = project;

  const onChange = (e) => {
    setFormData({ ...formData, name: title, path: title });
    form.setFieldsValue({ components: [] });
  };
  const onFinish = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Form
            name="normal_login"
            layout={"vertical"}
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Card title={"Create your custom form"}>
              <Row>
                <Col span={8}>
                  <Form.Item
                    label={titleName}
                    name="title"
                    rules={[{ required: true, message: "Confirm your Input" }]}
                    style={{ marginBottom: "15px" }}
                  >
                    <Input
                      type="text"
                      name="title"
                      value={title}
                      onChange={onChange}
                    />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={8}>
                  <Form.Item
                    label={titleName2}
                    name={["programme", "formProgramme"]}
                    rules={[
                      { required: true, message: "Please select a programme" },
                    ]}
                  >
                    <Select placeholder="Select programme">
                      {projects.map((project) => (
                        <Fragment>
                          <Option value={project.code}>
                            {project.code}
                          </Option>
                        </Fragment>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item label={titleName3} name="instruction">
                    <Input.TextArea
                      type="text"
                      name="instruction"
                      value={instruction}
                      onChange={onChange}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 12 }} lg={{ span: 12 }}>
                  {" "}
                </Col>
              </Row>
            </Card>
            <Divider />
            <Card>
              {/* <Card title={"Question 1"}>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      name="question"
                      rules={[
                        { required: true, message: "Confirm your Input" },
                      ]}
                      style={{ marginBottom: "15px" }}
                    >
                      <Input
                        type="text"
                        name="question"
                        placeholder={"Input your question"}
                        value={question}
                        onChange={onChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}></Col>
                  <Col span={4}>
                    <Form.Item
                      name={["inputType", "inputType"]}
                      rules={[
                        {
                          required: true,
                          message: "Please select an input type",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select an Input type"
                        label={"Short free text"}
                      >
                        <Option value="text">Short Free Text</Option>
                        <Option value="checkbox">Checkbox</Option>
                        <Option value="number">Number</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={2}></Col>
                  <Col span={8}>
                    {" "}
                    <Form.Item
                      name={["inputIndicator", "inputIndicator"]}
                      rules={[
                        {
                          required: true,
                          message: "Please select an Indicator",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select question indicator"
                        label={"Indicators"}
                      >
                        {indicator.map((inputIndicator) => (
                          <Fragment>
                            <Option value={inputIndicator}>
                              {inputIndicator}
                            </Option>
                          </Fragment>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>
                    {" "}
                    <Form.Item
                      name="target"
                      rules={[
                        { required: true, message: "Confirm your Input" },
                      ]}
                      style={{ marginBottom: "15px" }}
                    >
                      <Input
                        placeholder={"Target Line"}
                        type="number"
                        name="target"
                        value={target}
                        onChange={onChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}></Col>
                  <Col span={4}>
                    <Form.Item
                      name={["indicatorMetric", "indicatorMetric"]}
                      rules={[
                        {
                          required: true,
                          message: "Please select a metric",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select indicator metric"
                        label={"Select indicator metric"}
                      >
                        <Option value="text">Numeric</Option>
                        <Option value="checkbox">Percentage</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Card> */}
              <Form.List name="sights" className="newComponents">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field) => (
                      <div key={field.key} size="100%" width={"100%"}>
                        <Form.Item noStyle> {() => <div></div>}</Form.Item>
                        <Card>
                          <Row>
                            <Col span={8}>
                              <Form.Item
                                {...field}
                                name={[field.name, "question"]}
                                fieldKey={[field.fieldKey, "question"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Confirm your Input",
                                  },
                                ]}
                                style={{ marginBottom: "15px" }}
                              >
                                <Input
                                  type="text"
                                  name="question"
                                  placeholder={"Input your question here"}
                                  value={question}
                                  onChange={onChange}
                                />
                              </Form.Item>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={4}>
                              <Form.Item
                                {...field}
                                name={[field.name, "inputType"]}
                                fieldKey={[field.fieldKey, "inputType"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please select an input type",
                                  },
                                ]}
                              >
                                <Select
                                  placeholder="Select Input"
                                  label={"Short free text"}
                                >
                                  <Option value="text">Short Free Text</Option>
                                  <Option value="checkbox">Checkbox</Option>
                                  <Option value="number">Number</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={8}>
                              <Form.Item
                                {...field}
                                name={[field.name, "inputIndicator"]}
                                fieldKey={[field.fieldKey, "inputIndicator"]}
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Please select a question indicator",
                                  },
                                ]}
                              >
                                <Select
                                  placeholder="Select Indicator"
                                  label={"Indicators"}
                                >
                                  {projects.map((project) => (
                                    <Fragment>
                                      {Object.entries(
                                        project.indicatorCheckBoxes
                                      ).map(([key, val]) => (
                                        <Option value={val} key={key}>
                                          {" "}
                                          {val}
                                        </Option>
                                      ))}
                                    </Fragment>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={8}>
                              <Form.Item
                                {...field}
                                name={[field.name, "target"]}
                                fieldKey={[field.fieldKey, "target"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Confirm your Input",
                                  },
                                ]}
                                style={{ marginBottom: "15px" }}
                              >
                                <Input
                                  type="number"
                                  placeholder={"Target line"}
                                />
                              </Form.Item>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={4}>
                              <Form.Item
                                {...field}
                                name={[field.name, "indicatorMetric"]}
                                fieldKey={[field.fieldKey, "indicatorMetric"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please select a metric",
                                  },
                                ]}
                              >
                                <Select
                                  placeholder="Select indicator metric"
                                  label={"Select indicator metric"}
                                >
                                  <Option value="text">Numeric</Option>
                                  <Option value="checkbox">Percentage</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Card>
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </div>
                    ))}
                    <Divider />
                    <Row>
                      <Col span={2}>
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            icon={<PlusOutlined />}
                          >
                            Create Field
                          </Button>
                        </Form.Item>
                      </Col>
                      <Col span={1}></Col>
                      <Col span={2}>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="forgetBtn"
                            onSubmit={onFinish}
                          >
                            Create Form
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                )}
              </Form.List>
            </Card>
          </Form>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

const titleName = (
  <p
    style={{
      margin: "0px",
      padding: "0px",
      color: "#001529",
      fontSize: "14px",
      border: "none",
      fontWeight: "bold",
    }}
  >
    Form Title
  </p>
);

const titleName2 = (
  <p
    style={{
      margin: "0px",
      padding: "0px",
      color: "#001529",
      fontSize: "14px",
      border: "none",
      fontWeight: "bold",
    }}
  >
    Link Form to Programme
  </p>
);
const titleName3 = (
  <p
    style={{
      margin: "0px",
      padding: "0px",
      color: "#001529",
      fontSize: "14px",
      border: "none",
      fontWeight: "bold",
    }}
  >
    Instruction (Optional)
  </p>
);

const mapStateToProps = (state) => ({
  project: state.projects,
});

export default connect(mapStateToProps, {})(BuildForm);















<Card>
<Form.List
  name="components"
  value={components}
  className="newComponents"
>
  {(fields, { add, remove }) => (
    <>
      {fields.map((field) => (
        <div key={field.key} size="100%" width={"100%"}>
          <Form.Item noStyle> {() => <div></div>}</Form.Item>
          <Card>
            <Row>
              <Col span={7}>
                <Form.Item
                  {...field}
                  name={[field.name, "label"]}
                  fieldKey={[field.fieldKey, "label"]}
                  rules={[
                    {
                      required: true,
                      message:
                        "Please select a question indicator",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Indicator"
                    label={"Indicators"}
                  >
                    {projects.map((project) => (
                      <Fragment>
                        {Object.entries(
                          project.indicatorCheckBoxes
                        ).map(([key, val]) => (
                          <Option value={val} key={key}>
                            {" "}
                            {val}
                          </Option>
                        ))}
                      </Fragment>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <Form.Item
                  {...field}
                  name={[field.name, "inputData"]}
                  fieldKey={[field.fieldKey, "inputData"]}
                  rules={[
                    {
                      required: true,
                      message: "Please select an input type",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Input"
                    label={"Short free text"}
                  >
                    <Option value="text">Short Free Text</Option>
                    <Option value="checkbox">Checkbox</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <Form.Item
                  {...field}
                  name={[field.name, "target"]}
                  fieldKey={[field.fieldKey, "target"]}
                  rules={[
                    {
                      required: true,
                      message: "Confirm your Input",
                    },
                  ]}
                  style={{ marginBottom: "15px" }}
                >
                  <Input
                    type="number"
                    placeholder={"Target line"}
                  />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <Form.Item
                  {...field}
                  name={[field.name, "indicatorMetric"]}
                  fieldKey={[field.fieldKey, "indicatorMetric"]}
                  rules={[
                    {
                      required: true,
                      message: "Please select a metric",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select indicator metric"
                    label={"Select indicator metric"}
                  >
                    <Option value="numeric">Numeric</Option>
                    <Option value="percentage">Percentage</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={1}>
                <Button
                  type="danger"
                  onClick={() => remove(field.name)}
                  icon={<MinusCircleOutlined />}
                  size={"medium"}
                />
              </Col>
            </Row>
          </Card>
          <br />
          <br />
        </div>
      ))}
      <Divider />
      <Row>
        <Col span={2}>
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              icon={<PlusOutlined />}
            >
              Create Field
            </Button>
          </Form.Item>
        </Col>
        <Col span={1}></Col>
        <Col span={2}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="forgetBtn"
              onSubmit={onFinish}
            >
              Create Form
            </Button>
          </Form.Item>
          
        </Col>
      </Row>
    </>
  )}
</Form.List>
</Card>


