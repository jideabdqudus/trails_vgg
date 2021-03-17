import React, { Component } from "react";
import "./index.css";
import { Layout, Row, Col, Card, Skeleton, Select,Empty } from "antd";
import {Bar} from 'react-chartjs-2'
import {useDispatch, useSelector} from 'react-redux'
import { getReport } from "../../actions/reportActions";
import {isEmpty } from 'lodash'

const { Content } = Layout;

const Indicators = ({service,programId, projectDetails}) => {
  const dispatch = useDispatch()
  const {reports,loading} = useSelector(state => state.report)
  const [formName,setFormName] = React.useState('')

  const generateDataObject = (report) => {
    console.log('reports',report)
    const data = {
      labels: ['Mar'],
      datasets: [
        {
          label: `${report?.question}  |  Target: ${report?.targetValue}` || '',
          data: [report?.submissions?.value?.positive || 0],
          backgroundColor: "#1a1aff",
          maxBarThickness: 15,
        },
      ],
    }

    return data
  }
  

  React.useEffect(() => {
    if(!isEmpty(formName)){
      dispatch(getReport(`${programId}/${formName}/`,service))
    }
  },[programId,service,dispatch, formName])
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines:{
            display: true
          }
        },
      ],
      xAxes: [
        {
          gridLines:{
            display: false
          }
        },
      ],
    }, 
  }

  const handleChange = (value) => {
    setFormName(value)
  }

      return (
      <div>
        <Content>
          <h1 style={{ fontSize: "16px" }}> PERFORMANCE INDICATORS</h1>
          <Select onChange={handleChange} placeholder="--Select Linked Form--" style={{width: "100%", margin: "10px 0"}}>
            {(projectDetails?.form || [])?.map(({name,path}) => <Select.Option key={path} value={path}>{name}</Select.Option>)}
          </Select>
          <Row>
            {isEmpty(reports) ? <Empty style={{maxWidth:960, margin: "10rem auto"}} /> : reports?.map((report,idx) => (
              <Col key={idx} xs={{ span: 24 }} lg={{ span: 12 }}>
                <Card loading={loading} className={"indicatorCard"}>
                  <Bar
                    data={generateDataObject(report)}
                    width={100}
                    height={60}
                    options={options}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </div>
    );
}

export default Indicators;
