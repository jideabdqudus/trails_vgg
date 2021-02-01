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
    components: [],
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
    components,
    display,
  } = formData;

  const { projects } = project;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                    name={"programme"}
                    value={programme}
                    rules={[
                      { required: true, message: "Please select a programme" },
                    ]}
                  >
                    <Select placeholder="Select programme">
                      {projects.map((project) => (
                        <Fragment>
                          <Option value={project.projectCode}>
                            {project.projectCode}
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

            {/* Form Builder */}

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
                            <Col span={8}>
                              <Form.Item
                                {...field}
                                name={[field.name, "label"]}
                                fieldKey={[field.fieldKey, "label"]}
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
                                  name="label"
                                  placeholder={"Input your question here"}
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
                                  <Option value="numeric">Numeric</Option>
                                  <Option value="percentage">Percentage</Option>
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
