import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Checkbox, FormControlLabel } from "@material-ui/core";
import { sdgDump } from "./sdgDump";
import { appHelpers } from "../../appHelpers/appHelpers";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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

const renderIndicators = (indicators, props, sdgIndex) => {
  const { allIndicators } = props;
  const allUIIndicators = indicators.map((item, index) => {
    return (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            checked={item.Status}
            onChange={(e) =>
              props.handleCheckboxChange(
                item.Text,
                e,
                index,
                parseInt(sdgIndex)
              )
            }
            value={item.Text}
          />
        }
        label={item.Text}
      />
    );
  });

  return allUIIndicators;
};

const returnSdgPanels = (sdgChecks, classes, props, sdgDump) => {
  const { allIndicators } = props;
  const sdgPanels = sdgChecks.map((opt, index) => {
    return (
      <ExpansionPanel key={index}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{opt.Text}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form className={classes.container} noValidate>
            {renderIndicators(opt.Indicators, props, opt.Number)}
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });

  return sdgPanels;
};

function ImpactManagerForm3(props) {
  const { classes } = props;

  const { allIndicators, sdgChecks } = props;

  return (
    <div className={`flex items-center ${classes.root}`}>
      <Grid container spacing={8}>
        {/* <Grid item sm={4} md={12}>
          <form className={classes.container} noValidate>
            {renderIndicators(allIndicators, props)}
          </form>
        </Grid> */}

        <Grid item sm={4} md={12}>
          <div className={classes.root}>
            {returnSdgPanels(sdgChecks, classes, props, sdgDump)}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ImpactManagerForm3);
