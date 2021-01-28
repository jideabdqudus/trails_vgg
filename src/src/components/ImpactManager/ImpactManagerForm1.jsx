import React, { useState, useEffect, useRef, useMemo } from "react";
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
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { DropzoneArea } from "material-ui-dropzone";
import { useDropzone } from "react-dropzone";
import ImpactManagerSummary from "./ImpactManagerSummary";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

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

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function ImpactManagerForm1(props) {
  const {
    classes,
    projectDescription,
    projectCode,
    projectName,
    //projectLocation,
    programmeLocation,
    formOneErrors,
    //locationsEnum,
    projectBanner,
    programmePlaces,
    address,
  } = props;

  const {
    handleInputChange,
    handleSelectChange,
    handleBannerChange,
    handleChangePlace,
    handleSelectPlace,
  } = props;

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
        <Grid item sm={5} md={5}>
          <form className={classes.container} noValidate>
            <label for="outlined-select-currency" style={{ margin: 0 }}>
              Programme Location
            </label>
            <FormControl fullWidth required>
              <PlacesAutocomplete
                className={classes.textField}
                variant="outlined"
                value={address}
                onChange={handleChangePlace}
                onSelect={handleSelectPlace}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      style={{ padding: "15px" }}
                      {...getInputProps({
                        placeholder: "Search Location",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </FormControl>
          </form>
        </Grid>
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

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ",
// })(MapContainer);
