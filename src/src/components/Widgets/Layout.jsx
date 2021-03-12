import { EditOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import React from 'react'

export const Layout = ({ question, id, children, isPreview }) => {
    return (
        <Card className="preview-question-card" title={`Question ${id + 1}`} extra={isPreview && <Button icon={<EditOutlined/>} type="primary" ghost shape="round">Edit</Button>}>
            <Typography.Paragraph>{question}</Typography.Paragraph>
            {children}
        </Card>
    )
}
