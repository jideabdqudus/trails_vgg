import {Form,Radio} from 'antd'
import {Layout} from './Layout'
import React from 'react'
import { useDispatch } from 'react-redux'
import { buildAnswers } from '../../actions/formActions'

export const RadioInput = ({ content }) => {
    const dispatch = useDispatch()
    console.log(content)
    
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

     const handleChange = (e) => dispatch(buildAnswers({
        value: e.target?.value?.toString(),
        answer: e.target?.value === 1 ? 'Yes' : 'No',
        questionId:  content?.questionid
    }))
    
    return (
          <Layout indicatorquestion={content?.indicatorquestion || ''} formId={content?.programform} isPreview={content?.isPreview} id={content?.id} question={content?.question} >
            <Form.Item>
                <Radio.Group onChange={handleChange}>
                    <Radio style={radioStyle} value={1}>Yes</Radio>
                    <Radio style={radioStyle} value={2}>No</Radio>
                 </Radio.Group>
            </Form.Item>
        </Layout>
    )
}
