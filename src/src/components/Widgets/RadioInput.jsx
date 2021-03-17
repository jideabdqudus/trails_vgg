import {Form,Radio} from 'antd'
import {Layout} from './Layout'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { buildAnswers } from '../../actions/formActions'
import { isEmpty } from 'lodash'

export const RadioInput = ({ content }) => {
    const dispatch = useDispatch()
    console.log(content)
    
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    console.log('reereas', content)
console.log(content)
    const handleChange = (e) => dispatch(buildAnswers({
        value: content?.inputType,
        answer: e.target?.value,
        questionId: content?.questionId
    }))
    
    return (
          <Layout indicatorquestion={content?.indicatorQuestion || ''} formId={content?.programform} isPreview={content?.isPreview} id={content?.id} question={content?.question} >
            <Form.Item>
                <Radio.Group onChange={handleChange}>
                    <Radio style={radioStyle} value={'1'}>Yes</Radio>
                    <Radio style={radioStyle} value={'2'}>No</Radio>
                 </Radio.Group>
            </Form.Item>
        </Layout>
    )
}
