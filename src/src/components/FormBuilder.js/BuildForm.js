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
  Checkbox,
} from "antd";
import "./index.css";

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
    name: "",
    button: true,
    program: "",
    instruction: "",
    components: [],
  });

  const { title, program, instruction, components, name, button } = formData;

  const { projects } = project;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFinish = (formData) => {
    console.log("Data", formData);
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
                <Col span={1}></Col>
                <Col span={5}>
                  <Form.Item
                    label={titleName2}
                    name={"program"}
                    value={program}
                    rules={[
                      { required: true, message: "Please select a program" },
                    ]}
                  >
                    <Select placeholder="Select program">
                      {projects.map((project) => (
                        <Fragment>
                          <Option value={project.code}>{project.code}</Option>
                        </Fragment>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={1}></Col>
                <Col span={8}>
                  <Form.Item
                    label={titleName4}
                    name="name"
                    rules={[{ required: true, message: "Confirm your Input" }]}
                    style={{ marginBottom: "15px" }}
                  >
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={onChange}
                    />
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
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox checked disabled />
                  </Form.Item>
                  <Form.Item></Form.Item>
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
                            <Col span={7}>
                              <Form.Item
                                {...field}
                                name={[field.name, "linkedIndicator"]}
                                fieldKey={[field.fieldKey, "linkedIndicator"]}
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
                                name={[field.name, "value"]}
                                fieldKey={[field.fieldKey, "value"]}
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
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span={4}>
                              <Form.Item
                                {...field}
                                name={[field.name, "label"]}
                                fieldKey={[field.fieldKey, "label"]}
                              >
                                {" "}
                                <Input
                                  type="text"
                                  placeholder={"Input Label"}
                                />
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
    Link Form to program
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

const titleName4 = (
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
    Name
  </p>
);

const mapStateToProps = (state) => ({
  project: state.projects,
});

export default connect(mapStateToProps, {})(BuildForm);
