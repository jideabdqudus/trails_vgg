import React, { Component, useEffect } from "react";
import { Row, Col, Card } from "antd";
import "./index.css";
import { flatten, size, uniqBy } from "lodash";
import { getBudgetandBeneficiaries, getPrograms } from "../../actions/projectAction";
import { useSelector, useDispatch } from "react-redux";

const ActionCard = ({ ServiceBase }) => {
  const { programs } = useSelector((state) => state.projects);
  const { totalbudget } = useSelector((state) => state.projects);
  const { totalbeneficiaries } = useSelector((state) => state.projects);
  const { token } = useSelector((state) => state.auth);
  const handleSdgs = (_programs) => {
    const sdgs = uniqBy(flatten(_programs?.map(({ sdgs }) => sdgs)), "sdgId");
    return sdgs || [];
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBudgetandBeneficiaries(ServiceBase));
    dispatch(getPrograms(ServiceBase))
  }, [token, dispatch]);
  console.log("from",programs)
  return (
    <div>
      <Col span={24}>
        <Card className={"actionCard"}>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <span className={"actionItemStyle"}>Programmes</span>
              <p className={"actionItemParagraph"}>{size(programs)}</p>
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <span className={"actionItemStyle"}>Impact Targets (SDG)</span>
              <p className={"actionItemParagraph"}>
                {size(handleSdgs(programs))}
              </p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <span className={"actionItemStyle"}>Total Beneficiaries</span>
              <p className={"actionItemParagraph"}>{totalbeneficiaries}</p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <span className={"actionItemStyle"}>Budget</span>
              <p className={"actionItemParagraph"}>{totalbudget}</p>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};

export default ActionCard;
