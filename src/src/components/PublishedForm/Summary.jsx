import { Card, Col, Row, Typography } from 'antd'
import { startCase } from 'lodash'
import React from 'react'

export const Summary = ({form}) => {
    return (
        <div className="programme-summary">
            <Row>
                <Col span={24}>
                    <Card title="Programme Summary">
                        <Row gutter={[16,16]}>
                            <Col span={12}>
                                <Typography.Text className="programme-summary-title">Programme Name</Typography.Text>
                                <Typography.Paragraph className="programme-summary-description">{form?.program}</Typography.Paragraph>
                            </Col>
                            <Col span={12}>
                                <Typography.Text className="programme-summary-title">Form Name</Typography.Text>
                                <Typography.Paragraph className="programme-summary-description">{startCase(form?.name)}</Typography.Paragraph>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <Typography.Text className="programme-summary-title">Instructions</Typography.Text>
                                <Typography.Paragraph className="programme-summary-description">{form?.instructions}</Typography.Paragraph>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
