import React, { useEffect, useReducer, useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Select,
  Divider,
  message,
  InputNumber,
  Dropdown,
  Menu
} from "antd";
import "./index.css";
import { COMPONENT_TYPES } from '../../appHelpers/constants'
import { MinusCircleOutlined} from "@ant-design/icons";
import { connect,useDispatch, useSelector } from "react-redux";
import { createForm, getPrograms,getIndicatorQuestion, getForm, updateForm } from '../../actions/formActions'
import { camelCase, flatten, isEmpty, omit } from "lodash";
import {useHistory} from 'react-router-dom'
import { dummyQuestionLibrary } from "./constants";
import {useParams} from 'react-router-dom'

const { Option } = Select;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'components':
     return {...state, components: payload}
    case 'formData':
      return {...state, [payload.name]: payload.value}
    case 'builderType':
      return { ...state, builderType: payload }
    case 'customQuestionInput':
      return {...state, customQuestionInput: {...state.customQuestionInput, [payload.id]: payload.value}}
    case 'updateForm':
      console.log('testing',{...state,...payload})
      return {...state, ...payload}
    default:
      return state
  }
}

const transformNonEventChange = ({ name, value }) => {
    const event = {
        target: {},
    };
    event.target.name = name;
    event.target.value = value;

    return event;
};

const BuildForm = ({service}) => {
  const initialState = {
    title: "",
    display: "form",
    type: "form",
    name: "",
    program: "",
    instructions: "",
    buttonType:"submit",
    buttonValue: "Submit",
    customQuestionInput: {},
    components: []
  }
  const {id} = useParams()
  const [state, dispatch] = useReducer(reducer,initialState)
  const { title,name,program,instructions, components, customQuestionInput } = state

  const reduxDispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const projects = useSelector(state => state.projects.projects)
  const loadingState = useSelector(state => state.form.loading)
  const programs = useSelector(state => state.form.programs)
  const {form} = useSelector(state => state.form)
  const indicatorQuestions = useSelector(state =>  state.form.indicatorQuestions)

  console.log({indicatorQuestions})
  const history = useHistory()
  const [indicatorId, setIndicatorId] = useState(null)

  useEffect(() => {
    reduxDispatch(getPrograms(service))
  },[service,reduxDispatch])

  useEffect(() => {
    if(id){
      reduxDispatch(getForm(id,service,true))
      // 
    }

    //eslint-disable-next-line
},[])

useEffect(() => {
  if(id){
    dispatch({payload: {...form, title: form['form-title']}, type: 'updateForm'})
  }
},[form,id])

const onChange = (e) => {
    dispatch({ payload: { name: e.target.name,value:e.target.value }, type:'formData'})
  };
  console.log(form)

  const onFinish = () => {
    if (!state?.components || !state?.components.length) {
      return message.error('Please create some question fields')
    }
    console.log('iddddddd',id)
    id ? reduxDispatch(updateForm(omit(state,['customQuestionInput','builderType']), service, id, history)) : reduxDispatch(createForm(omit(state,['customQuestionInput','builderType']), service, history))
  }; 

  const selectedProgramSdgs = (_programId) => {
    const selectedProgram = programs?.filter((program) =>  program?.id === _programId)
    return selectedProgram[0]?.sdgs || []
  }
console.log(state)
  const indicators = (sdgs) => flatten(sdgs?.map(({indicators}) => indicators))

  const handleChangeBuilderType = (_type) => {  
    if(isEmpty(state?.program)) return message.error('Please select a program')
    dispatch({ payload: _type, type: 'builderType' })
    switch (_type) {
      case COMPONENT_TYPES.radio:
       return dispatch({
            payload: [
                ...components,
                {
                question: "",
                targetValue : null,
                targetType : "percentage",
                // type: COMPONENT_TYPES.radio,
                inputType: COMPONENT_TYPES.radio,
                input: true,
                placeholder: "",
                linkedIndicator : null,
                indicatorquestion: "",
                value:'number',
                // values: [
                //   {
                //     label: "Yes",
                //     value: "1",
                //     shortcut: ""
                //   },
                //   {
                //     label: "No",
                //     value: "2",
                //     shortcut: ""
                //   },
                // ],
                },
            ],
            type: 'components',
        });

      case COMPONENT_TYPES.text:
       return dispatch({
            payload: [
                ...components,
                {
                  input: true,
                  // type: COMPONENT_TYPES.text,
                  inputType: COMPONENT_TYPES.text,
                  value: "text",
                  placeholder: "",
                  question: "",
                  linkedIndicator : null,
                  targetValue : null,
                  targetType : "percentage",
                  indicatorquestion: ""
                },
            ],
            type: 'components',
        });
    
      default:
       return dispatch({payload:[...components], type: 'components'})
    }
 
  }

  const BUILDER_TYPES = [
    // {
    //   name: 'Text Input',
    //   value: COMPONENT_TYPES.text
    // },
    {
      name: 'Radio Input',
      value: COMPONENT_TYPES.radio
    }
  ]

  const menu = (
    <Menu style={{ display: 'flex', flexDirection: 'column' }}>
      {BUILDER_TYPES?.map(({name,value}) => <Menu.Item key={value} onClick={()=> handleChangeBuilderType(value)}>{name}</Menu.Item> )}
    </Menu>
  )

    const change = (e, idx) => {
        const { name, value } = e.target;
        components[idx][name] = value;
        dispatch({ payload: [...components], type: 'components' });
    };

    const handleRemoveClick = (e, index) => {
        e.stopPropagation();
        const list = [...components];
        const otherLists = list.filter((_, idx) => idx !== index);
        dispatch({ payload: otherLists, type: 'components' });
    };

  const handleSelect = (id) => {
    setIndicatorId(id)
    reduxDispatch(getIndicatorQuestion(id, service))
  }

    return (
    <div className="form-builder">
      <Row>
        <Col span={24}>
          <Form
            name="normal_login"
            layout={"vertical"}
            className="login-form"
            onFinish={onFinish}
          >
            <Card title={"Create your custom form"}>
              <Row gutter={[16,16]}>
                <Col span={8}>
                  <Form.Item
                    label={titleName}
                    name="title"
                    rules={[{ required: true, message: "Form title is required" }]}
                    style={{ marginBottom: "15px" }}
                  >
                    {/* {console.log(state['form-title'])} */}
                    <Input
                      type="text"
                      name="title"
                      value={title}
                      onChange={onChange}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  {/* {console.log(program)} */}
                  <Form.Item
                    label={titleName2}
                    name={"program"}
                    value={program}
                    rules={[
                      { required: true, message: "Please select a program" },
                    ]}
                  >
                    <Select onChange={(value) => dispatch({ payload: { name: 'program',value: value.toString() }, type:'formData'})} placeholder="Select program">
                      {(programs||[])?.map((program) => (
                          <Option key={program?.id} value={program?.id}>{program?.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label={titleName4}
                    name="name"
                    rules={[{ required: true, message: "Form name is required" }]}
                    style={{ marginBottom: "15px" }}
                  >
                    {/* {console.log(name)} */}
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
                  <Form.Item label={titleName3} name="instructions">
                    {/* {console.log(instructions)} */}
                    <Input.TextArea
                      type="text"
                      name="instructions"
                      value={instructions}
                      onChange={onChange}
                    />
                  </Form.Item>
                </Col>
              </Row>
        </Card>
            <Divider />

            {/* Form Builder */}
            <Card>
              <Dropdown trigger={['hover','click']} overlay={menu}>
                <Button style={{marginBottom:20}} type="primary" ghost>Create Question</Button>
              </Dropdown> 

              {components?.map((component, idx) => {
                const { targetType,linkedindicator,question,placeholder,targetvalue } = component
                console.log({targetvalue})
                const handleSelectQuestion = (val) => {
                  if (val === 'custom') {
                    change(transformNonEventChange({ name: 'indicatorquestion', value: '' }), idx)
                    return dispatch({payload:{value:true,id:idx}, type:'customQuestionInput'})
                  }
                  dispatch({payload:{value:false,id:idx}, type:'customQuestionInput'})
                  change(transformNonEventChange({ name: 'indicatorquestion', value: val }), idx)
                }
                return (
                <Form.Item>
                  <Card>
                    <Row gutter={[16,16]}>
                      <Col span={7}>
                        <Form.Item
                          rules={[
                                  {
                                    required: true,
                                    message:
                                      "Please select a question indicator",
                                  },
                              ]}
                          style={{ marginBottom: 0 }}
                        >
                          {/* {console.log(linkedindicator)} */}
                          <Select onSelect={handleSelect} onChange={(val) => change(transformNonEventChange({name:'linkedIndicator', value:val }), idx)} placeholder="--Select Indicator--" >
                            {indicators(selectedProgramSdgs(+state?.program))?.map((indicator,idx) => <Option key={idx} value={indicator?.programIndicatorId}>{indicator?.description}</Option> )}
                          </Select>
                        </Form.Item>
                       </Col>
                       <Col span={8}>
                              <Form.Item
                                rules={[
                                  {
                                    required: true,
                                    message: "Please select a Question",
                                  },
                                ]}
                                style={{ marginBottom: 0 }}
                              >
                                <Select
                                  placeholder="Select Question"
                                  onChange={handleSelectQuestion}
                            >
                              <Option value="custom">Custom Question</Option>
                              {indicatorQuestions?.map(({question, id}) => <Option value={id}>{question}</Option> )}
                                </Select>
                              </Form.Item>
                        </Col>
                         {((customQuestionInput && customQuestionInput[idx]) || !isEmpty(question)) && <Col span={6}>
                          <Form.Item
                              placeholder="--Type Question--"
                              style={{marginBottom: 0}}
                              >
                                {/* {console.log(question)} */}
                                <Input
                                  type="text"
                                  name="question"
                                  placeholder="--Type Question--"
                                  onChange={(e) => change(e,idx)}
                                  value={question}
                                />
                              </Form.Item>
                            </Col>}
                         <Col span={4}>
                              <Form.Item
                                rules={[
                                  {
                                    required: true,
                                    message: "Please select a metric",
                                  },
                            ]}
                            style={{ marginBottom: 0 }}
                              >
                                <Select
                                  placeholder="Select indicator metric"
                                  label="--Select indicator metric--"
                                  onChange={(val) => change(transformNonEventChange({name:'targetType', value:val}), idx)}
                                defaultValue={targetType}
                                >
                                  <Option value="number">Number</Option>
                                  <Option value="percentage">Percentage</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                        <Col span={4}>
                              <Form.Item
                                rules={[
                                  {
                                    required: true,
                                    message: "Target Value is required",
                                  },
                                ]}
                                style={{ marginBottom: 0 }}
                              >
                                <InputNumber
                                //  value={targetvalue}
                              min={0}
                              max={targetType === 'percentage' ? 99 : null}
                              style={{width:'100%'}}
                              placeholder="--Target Value--"
                              onChange={(val) => change(transformNonEventChange({name:'targetValue', value:val}), idx)}
                                />
                              </Form.Item>
                            </Col>
                      <Col span={6}>
                          <Form.Item
                              placeholder="--Placeholder--"
                              style={{marginBottom: 0}}
                              >
                                {/* {console.log(placeholder)} */}
                                <Input
                                  type="text"
                                  name="placeholder"
                                  value={placeholder}
                                placeholder={"Input Placeholder"}
                                onChange={(e) => change(e,idx)}
                                />
                              </Form.Item>
                            </Col>
                        <Col span={1}>
                              <Button
                                type="danger"
                                onClick={(e) => handleRemoveClick(e, idx)}
                                icon={<MinusCircleOutlined />}
                                size={"medium"}
                              />
                            </Col>
                    </Row>
                  </Card>
                </Form.Item>
              )
              })}
              {!isEmpty(components) && <>
                <Divider />
                <Row gutter={[16, 16]}>
                  <Col span={3}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="forgetBtn"
                        onSubmit={onFinish}
                        loading={loadingState}
                      >
                        Create Form
                          </Button>
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                       <Dropdown trigger={['hover','click']} overlay={menu}>
                        <Button
                          type="link"
                          htmlType="submit"
                        >
                          Create Field
                        </Button>
                      </Dropdown> 
                    </Form.Item>
                  </Col>
                </Row>
              </>}
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
    Link Form to programme
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
