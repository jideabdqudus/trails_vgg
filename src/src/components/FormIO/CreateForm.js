import React,{useEffect, useState} from "react";
import { Row, Col, Layout, Card, Typography, Pagination, Skeleton } from "antd";
import { Link } from "react-router-dom";
import './styles.scss'
import {getForms} from '../../actions/formActions'
import { useSelector, useDispatch } from 'react-redux'
import background from '../../assets/background123.svg'

const FormCard = ({title}) => (
    <Card
    cover={<img alt="example" className="form-card-image" src={background} />}
    className="form-card"
  >
    <div className="form-card-text-wrapper">
      <Typography.Paragraph className="form-card-text" ellipsis={{
        rows:2,
      }}>{title}</Typography.Paragraph>
    </div>
  </Card>
)

const CreateForm = () => {
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)
  const { forms, pagination,loading } = useSelector(state => state.form)
  const [page, setPage] = useState(1)

  const handlePageChange = (_page) => setPage(_page)

  useEffect(() => {
    dispatch(getForms(token, page))
  },[dispatch, token,page])

  return (
    <Layout className="create-form">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <h1 className="create-form-title" >Create new form</h1>
          <Link to="/dashboard/build_form">
            <Card className="create-form-new-form">
              <h1 className="create-form-plus">+</h1>
            </Card>
          </Link>
        </Col>
        <Col span={16}>
          <h6 className="create-form-title">Available Forms</h6>
          <Row gutter={[16, 16]}>
            {loading ? <Skeleton /> : forms?.map(({name,id},idx) => (
              <Col key={name} span={6}>
                <Link to={`/dashboard/form/preview/${id}`}>
                  <FormCard title={name} />
                </Link>
              </Col>
            ))}
          </Row>
          <Row gutter={[16, 16]} style={{marginTop: 20}}>
              <Col>
              <Pagination
                current={pagination?.currentPage || 1}
                hideOnSinglePage
                pageSize={pagination?.limit || 0}
                pageSizeOptions={[10, 20, 50, 100]}
                onChange={handlePageChange}
                total={(+pagination?.totalPages || 0) * (+pagination?.limit || 0)}
              />
              </Col>
           </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateForm;
