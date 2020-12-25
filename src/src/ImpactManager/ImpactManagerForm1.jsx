import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
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

function ImpactManagerForm1(props) {
  const {
    classes,
    projectDescription,
    projectCode,
    projectName,
    projectLocation,
    formOneErrors,
    locationsEnum,
  } = props;

  const { handleInputChange, handleSelectChange } = props;

  return (
    <div className={`flex items-center ${classes.root}`}>
      <Grid container spacing={8}>
        {/* Project Name */}
        <Grid item sm={4} md={4}>
          <form className={classes.container} noValidate>
            <TextField
              id="project-name"
              error={formOneErrors.projectName}
              name={"projectName"}
              label="Project Name"
              value={projectName}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </form>
        </Grid>

        {/* Project Code */}
        <Grid item sm={4} md={4}>
          <form className={classes.container} noValidate>
            <TextField
              id="project-code"
              name={"projectCode"}
              error={formOneErrors.projectCode}
              label="Project Code"
              value={projectCode}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </form>
        </Grid>

        {/* Project Location */}
        <Grid item sm={4} md={4}>
          <form className={classes.container} noValidate>
            <FormControl fullWidth required margin="normal">
              <TextField
                id="outlined-select-currency"
                select
                value={projectLocation}
                label="Project Location"
                variant="outlined"
                onChange={handleSelectChange("projectLocation")}
                error={formOneErrors.projectLocation}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {locationsEnum.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </form>
        </Grid>
      </Grid>

      {/* Second Row */}

      <Grid container spacing={8}>
        {/* Project Description */}
        <Grid item sm={4} md={8}>
          <form className={classes.container} noValidate>
            <TextField
              id="project-description"
              name={"projectDescription"}
              label="Project Description"
              value={projectDescription}
              error={formOneErrors.projectDescription}
              multiline
              rows={4}
              rowsMax={6}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ImpactManagerForm1);
