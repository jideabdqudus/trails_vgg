import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Button,
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
    marginTop: 0,
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
    projectBanner,
  } = props;

  const { handleInputChange, handleSelectChange } = props;

  return (
    <div className={`flex items-center ${classes.root}`}>
      <Grid container spacing={3}>
        {/* Project Name */}
        <Grid item sm={5} md={5}>
          <form className={classes.container} noValidate>
            <label for="project-name" style={{ margin: 0 }}>
              Programme Name
            </label>
            <TextField
              id="project-name"
              error={formOneErrors.projectName}
              name={"projectName"}
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
        <Grid item sm={2} md={2}>
          <form className={classes.container} noValidate>
            <label for="project-code" style={{ margin: 0 }}>
              Programme Code
            </label>
            <TextField
              id="project-code"
              name={"projectCode"}
              error={formOneErrors.projectCode}
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
        <Grid item sm={3} md={3}>
          <form className={classes.container} noValidate>
            <label for="outlined-select-currency" style={{ margin: 0 }}>
              Programme Location
            </label>
            <FormControl fullWidth required>
              <TextField
                id="outlined-select-currency"
                select
                value={projectLocation}
                className={classes.textField}
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

        {/* Project Banner */}
        {/* <Grid item sm={3} md={3}>
          <form className={classes.container} noValidate>
            <FormControl fullWidth required margin="normal">
              <TextField
                id="project-banner"
                name={"projectBanner"}
                type="file"
                value={projectBanner}
                label="Project Banner"
                variant="outlined"
                onChange={handleInputChange}
                error={formOneErrors.projectLocation}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleInputChange}
              >
              </TextField>
            </FormControl>
          </form>
        </Grid> */}
      </Grid>

      {/* Second Row */}

      <Grid container spacing={8}>
        {/* Project Description */}
        <Grid item sm={4} md={12}>
          <form className={classes.container} noValidate>
            <label for="project-description" style={{ margin: 0 }}>
              Programme Description
            </label>
            <TextField
              id="project-description"
              name={"projectDescription"}
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
