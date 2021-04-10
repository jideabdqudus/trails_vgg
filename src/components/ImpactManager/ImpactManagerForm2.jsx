import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";
import SvgCard from "../SvgCard/SvgCard";
import _ from "lodash";

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

  const { handleSdgBoxChange, sdgCheckBoxes, formTwoErrors, sdgDump } = props;

  const renderSdgs = () => {
    const newArray = props.sdgDump.slice(0, 3);
    const pulled = _.pullAt(newArray, [0, 2]);

    const allSdgs =
      props.sdgDump &&
      pulled.map((item, index) => {
        return (
          <SvgCard
            key={index}
            path={item.image}
            width={120}
            height={120}
            sdgCheckBoxes={sdgCheckBoxes}
            opacity={setOpacity(sdgCheckBoxes, item.id)}
            onClick={handleSdgBoxChange.bind(this, item.id)}
          />
        );
      });

    return allSdgs;
  };

  // const renderSdgs = () => {
  //   const allSdgs =
  //     editedSDGArray &&
  //     editedSDGArray.map((item, index) => {
  //       return (
  //         <SvgCard
  //           key={index}
  //           path={item.image}
  //           width={120}
  //           height={120}
  //           sdgCheckBoxes={sdgCheckBoxes}
  //           opacity={setOpacity(sdgCheckBoxes, item.id)}
  //           onClick={handleSdgBoxChange.bind(this, item.id)}
  //         />
  //       );
  //     });

  //   return allSdgs;
  // };

  return (
    <div className={`flex items-center ${classes.root}`}>
      <Grid>
        <Grid item sm={4} md={12}>
          <p
            style={{
              color: formTwoErrors.svg === true ? "red" : "black",
              marginTop: "15px",
            }}
          >
            Which SDGs aligns with your impact priorities?
          </p>

          <Grid item sm={12} md={12}>
            {renderSdgs(sdgDump)}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(ImpactManagerForm2);
