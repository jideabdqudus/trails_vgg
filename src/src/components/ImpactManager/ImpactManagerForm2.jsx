import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withStore } from "@spyna/react-store";
import {
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@material-ui/core";
import { sdgDump } from "./sdgDump";
import SvgCard from "../SvgCard/SvgCard";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: "100%",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formRoot: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  searchButton: {
    backgroundColor: " #66bb6a",
  },
  select: {
    marginTop: "0px",
    width: "100%",
  },
  button: {
    margin: theme.spacing(),
    marginTop: "16px",
    color: "#ffffff",
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "100%",
  },
});

const ImpactManagerForm2 = (props) => {
  const { classes } = props;

  const setOpacity = (sdgCheckBoxes, sdgNum) => {
    let opacity = "";
    if (sdgCheckBoxes[sdgNum] === true) {
      opacity = "1";
    } else {
      opacity = "0.3";
    }
    return opacity;
  };

  const {
    handleInputChange,
    handleSdgBoxChange,
    sdgCheckBoxes,
    formTwoErrors,
  } = props;

  const renderSdgs = (sdgDump) => {
    const allSdgs = sdgDump.map((item, index) => {
      return (
        <SvgCard
          key={index}
          path={item.Image}
          sdgCheckBoxes={sdgCheckBoxes}
          opacity={setOpacity(sdgCheckBoxes, item.Number)}
          onClick={handleSdgBoxChange.bind(this, item.Number)}
        />
      );
    });

    return allSdgs;
  };

  return (
    <div className={`flex items-center ${classes.root}`}>
      <Grid container spacing={8}>
        <Grid item sm={4} md={12}>
          <label
            style={{ color: formTwoErrors.svg === true ? "red" : "black" }}
          >
            Which SDGs aligns with your impact priorities?
          </label>

          <Grid item sm={7} md={6}>
            {renderSdgs(sdgDump)}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(ImpactManagerForm2);
