import React from "react";
import { Row, Col, Layout, Card } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";

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
        <Col span={12}>
          <h3>Create new form</h3>
          <Fab color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
          <Card style={{ width: 300, height: 350, borderColor: "black" }}>
            <h1>+</h1>
          </Card>
        </Col>
        <Col span={12}>
          <h3>Available Forms</h3>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateForm;
