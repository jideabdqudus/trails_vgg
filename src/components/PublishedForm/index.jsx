import { Button, Col, Row, Skeleton, Typography, message } from 'antd'
import React, { useEffect } from 'react'
import { Questions } from './Questions'
import { Summary } from './Summary'
import {useSelector,useDispatch} from 'react-redux'
import { getForm,createSubmission } from '../../actions/formActions'
import {useParams} from 'react-router-dom'
import Form from 'antd/lib/form/Form'
import { isEmpty, size } from 'lodash'

const PublisedForm = ({service}) => {
    const { id } = useParams()
    const {form,loading, answers} = useSelector(state => state.form)
    const dispatch = useDispatch()
   
    useEffect(() => {
        console.log('ran')
        dispatch(getForm(id,service,false))
    },[id,dispatch,service])

    if(loading) return <Skeleton />

    const onFinish = () => {
        const answersArray = Object.values(answers)
        console.log('aasdasdsad', answersArray)
        if(size(answersArray) !== size(form.components)) return message.error('You have one or more empty fields')
        if (isEmpty(answersArray)) return message.error('Answers cannot be empty')
        for (const value of answersArray) {
            if(isEmpty(value?.answer) || isEmpty(value?.value) || isEmpty(value?.questionId.toString())){
                return message.error('You have one or more empty fields')
            }
        }
        dispatch(createSubmission(id, { answers: answersArray },service))
    } 

    return (
        <section className="form-preview-section" >
            <Form onFinish={onFinish} >
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <Summary form={form} />
                </Col>
                <Col span={24}>
                    <Typography.Text className="form-preview-section-title">Questions</Typography.Text>
                </Col>
                <Col span={24}>
                <Questions form={form} />
                </Col>
                <Col span={12}>
                    <Button  onSubmit={onFinish} htmlType="submit" loading={loading} type="primary" size="large" shape="round">Submit</Button>
                </Col>
            </Row>
            </Form>
        </section>
    )
}

export default PublisedForm
