import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { startCase } from "lodash";
import { useHistory } from "react-router-dom";

export const ProgrammeSummary = ({ form }) => {
  const history = useHistory();
  const handleEdit = () =>
    history.push(`/app/dashboard/build_form/${form?.id}`);

  return (
    <div className="programme-summary">
      <Row>
        <Col span={24}>
          <Card
            title="Programme Summary"
            extra={<Button onClick={handleEdit} icon={<EditOutlined />} type="primary" ghost shape="round">Edit</Button>}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Typography.Text className="programme-summary-title">
                  Form Name
                </Typography.Text>
                <Typography.Paragraph className="programme-summary-description">
                  {startCase(form?.name)}
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Typography.Text className="programme-summary-title">
                  Instructions
                </Typography.Text>
                <Typography.Paragraph className="programme-summary-description">
                {form.instructions}
                </Typography.Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
