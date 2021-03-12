import React from "react";
import { Row, Col, Layout, Card } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const CreateForm = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Row>
        <Col span={6}>
          <h1 style={{ fontSize: "20px" }}>Create new form</h1>
          <br />
          <Link to="/app/dashboard/build_form">
            <Card style={{ width: 300, height: 350, borderColor: "black" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "150px",
                  margin: "0",
                  padding: "0",
                  fontWeight: "200",
                }}
              >
                +
              </h1>
            </Card>
          </Link>
        </Col>
        <Col span={2}></Col>
        <Col span={16}>
          <h6 style={{ fontSize: "20px" }}>Available Forms</h6>
          <br />
          <Link to="/app/dashboard/build_form">
            <Card
              style={{ width: 100, height: 150, borderColor: "black" }}
              title="GEEP"
            ></Card>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateForm;
