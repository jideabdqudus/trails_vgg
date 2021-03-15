import { Typography, InputNumber, Form } from 'antd'
import { camelCase, isEmpty, startCase } from 'lodash'
import React from 'react'
import { useDispatch } from 'react-redux'
import { buildAnswers } from '../../actions/formActions'
import { Layout } from './Layout'

export const ShortFreeText = ({ content }) => {
    const dispatch = useDispatch()

    const handleChange = (value) => dispatch(buildAnswers({
        value: value?.toString(),
        answer: value?.toString(),
        questionId:  content?.questionid
    }))

    return (
        <Layout indicatorquestion={content?.indicatorquestion || ''}  formId={content?.programform} isPreview={content?.isPreview} id={content?.id} question={content?.question} >
            <Form.Item rules={[
                      { required: true, message: "This field is required" },
                    ]}>
                <InputNumber onChange={handleChange} style={{width:'100%'}} name={camelCase(content?.key)} placeholder={content?.placeholder}  />
            </Form.Item>
        </Layout>
    )
}
