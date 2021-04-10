import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Layout,
  Card,
  Typography,
  Pagination,
  Skeleton,
  Dropdown,
  Menu,
} from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";
import { getForms, deleteForm } from "../../actions/formActions";
import { useSelector, useDispatch } from "react-redux";
import background from "../../assets/background123.svg";
import { MoreOutlined } from "@ant-design/icons";
import { FORM } from "../../constants/Types";

const FormCard = ({ title, id, page, service }) => {
  const dispatch = useDispatch();
  const menu = (
    <Menu>
      <Menu.Item onClick={() => dispatch(deleteForm(id, service))} danger>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Card
      cover={<img alt="example" className="form-card-image" src={background} />}
      className="form-card"
    >
      <div className="form-card-text-wrapper">
        <Link to={`/app/dashboard/form/preview/${id}`}>
          <Typography.Paragraph
            className="form-card-text"
            ellipsis={{
              rows: 2,
            }}
          >
            {title}
          </Typography.Paragraph>
        </Link>
      </div>
      <div style={{ textAlign: "right", cursor: "pointer" }}>
        <Dropdown
          trigger={["click", "hover"]}
          placement="bottomCenter"
          overlay={menu}
        >
          <MoreOutlined />
        </Dropdown>
      </div>
    </Card>
  );
};

const CreateForm = ({ service }) => {
  const dispatch = useDispatch();
  const { forms, pagination, loading } = useSelector((state) => state.form);
  const [page, setPage] = useState(1);
  const handlePageChange = (_page) => setPage(_page);

  useEffect(() => {
    dispatch(getForms(service, page));
  }, [dispatch, service, page]);

  const handleReset = () =>
    dispatch({ type: FORM.getFormSuccess, payload: {} });
  
  return (
    <Layout className="create-form">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <h1 className="create-form-title">Create new form</h1>
          <Link onClick={handleReset} to="/app/dashboard/build_form">
            <Card className="create-form-new-form">
              <h1 className="create-form-plus">+</h1>
            </Card>
          </Link>
        </Col>
        <Col span={16}>
          <h6 className="create-form-title">Available Forms</h6>
          <Row gutter={[16, 16]}>
            {loading ? (
              <Skeleton />
            ) : (
              forms?.map(({ name, id }, idx) => (
                <Col key={name} span={6}>
                  <FormCard
                    title={name}
                    id={id}
                    page={page}
                    service={service}
                  />
                </Col>
              ))
            )}
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            <Col>
              <Pagination
                current={pagination?.currentPage || 1}
                hideOnSinglePage
                pageSize={pagination?.limit || 0}
                pageSizeOptions={[10, 20, 50, 100]}
                onChange={handlePageChange}
                total={
                  (+pagination?.totalPages || 0) * (+pagination?.limit || 0)
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateForm;
