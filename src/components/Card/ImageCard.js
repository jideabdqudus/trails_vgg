import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Row, Col } from "antd";
import modulestyle from "./imagecard.module.css";
const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

const ImageCard = ({
  name,
  image,
  code,
  handleOverview,
  id,
  sdgs,
  locations,
}) => {
  const classes = useStyles();

  const renderSdgs = (sdgs) => {
    let sdgElems = [];
    for (let i in sdgs) {
      sdgElems.push(
        <>
          <label className="p-0 m-0">
            SDG {`${sdgs[i].sdgId} `} {i !== sdgs.length - 1 ? ", " : ""}
          </label>
        </>
      );
    }
    return sdgElems;
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="290"
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {" "}
            <h3>{name}</h3>
          </div>
          <div>
            {" "}
            <h4 style={{ color: "#53d1be", fontWeight: "bold" }}>{code}</h4>
          </div>
        </div>
        <Row>
          <Col md="3">
            <div>
              <label className="p-0 m-0">LOCATION</label>
            </div>
            <div>
              <label className="p-0 m-0">{locations}</label>
            </div>
          </Col>
          <div className={modulestyle.vl}></div>
          <Col md="5" style={{ marginLeft: "10px" }}>
            <div>
              <label className="p-0 m-0">IMPACT</label>
            </div>
            <div style={{ width: "max-content" }}>
              <div style={{ display: "flex" }}>{renderSdgs(sdgs)}</div>
            </div>
          </Col>
        </Row>
        {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
      </CardContent>
      <CardActions>
        <Button
          size="large"
          color="primary"
          onClick={(e) => handleOverview(id, name)}
          className="projectButton"
        >
          Overview
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
