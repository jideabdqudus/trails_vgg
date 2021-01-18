import React from "react";
import { Row, Col, Layout, Card } from "antd";
const CreateForm = () => {
  return (
    <Layout>
      <Row>
        <Col span={12}>
          <h3>Create new form</h3>
          <Card style={{ width: 300, height: 350, borderColor: "black" }}>
            <h1>+</h1>
          </Card>
        </Col>
        <Col span={12}>
          <h3>Available Forms</h3>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateForm;
