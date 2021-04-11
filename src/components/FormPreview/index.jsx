import React, { useEffect } from "react";
import { ProgrammeSummary } from "./ProgrammeSummary";
import { PreviewQuestions } from "./PreviewQuestions";
import { Button, Col, Row, Skeleton, Typography } from "antd";
import "./styles.scss";
import { appHelpers } from "../../appHelpers/appHelpers";
import { getForm } from "../../actions/formActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const FormPreview = ({ service }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { form, loading } = useSelector((state) => state.form);

  const handleSubmit = () => {
    appHelpers.successMessageAlert("Form Successfully Created", 2000);
    history.push("/app/dashboard/form");
  };

  useEffect(() => {
    dispatch(getForm(id, service, true));
  }, [id, dispatch, service]);

  if (loading) return <Skeleton />;


  // const formName = form.name

  // const newFormName = formName.split(" ").join("");

  return (
    <section className="form-preview-section">
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Typography.Paragraph className="form-preview-section-link">
            Generated Link:{" "}
            <a target="_blank" rel="noreferrer" href={form.formlink}>
              {" "}
              {form.formlink}
            </a>
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <ProgrammeSummary form={form} />
        </Col>
        <Col span={24}>
          <Typography.Text className="form-preview-section-title">
            Preview Questions
          </Typography.Text>
        </Col>
        <Col span={24}>
          <PreviewQuestions form={form} />
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default FormPreview;
