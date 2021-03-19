import { EditOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { isEmpty } from 'lodash'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const Layout = ({ question, id, children, isPreview, formId,indicatorquestion }) => {
    const history = useHistory()
    const handleEdit = () => history.push(`/app/dashboard/build_form/${formId}`)
    return (
        <Card className="preview-question-card" title={`Question ${id + 1}`} extra={isPreview && <Button onClick={handleEdit} icon={<EditOutlined/>} type="primary" ghost shape="round">Edit</Button>}>
            <Typography.Paragraph>{isEmpty(question) ? indicatorquestion?.question : question}</Typography.Paragraph>
            {children}
        </Card>
    )
}
