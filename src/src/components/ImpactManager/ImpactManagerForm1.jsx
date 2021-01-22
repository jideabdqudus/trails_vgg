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

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"] }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
  console.log(addressObject.formatted_address);
}

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
  } = props;

  const { handleInputChange, handleSelectChange, handleBannerChange } = props;

  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

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
              {/* <TextField
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
              </TextField> */}

              <GooglePlacesAutocomplete apiKey="AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ" />

              {/* <input
                id="outlined-select-currency"
                value={programmeLocation}
                className={classes.textField}
                variant="outlined"
                onChange={handleSelectChange("projectLocation")}
                error={formOneErrors.projectLocation}
                InputLabelProps={{
                  shrink: true,
                }}
                ref={autoCompleteRef}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Enter a City"
                value={query}
              /> */}
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
                onChange={handleBannerChange}
                error={formOneErrors.projectLocation}
               
              >
              </TextField>
            </FormControl>
          </form>
        </Grid>  */}
        <div className="container">
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here</p>
            <button type="button" onClick={open}>
              Open File Dialog
            </button>
          </div>
          <aside style={thumbsContainer}>{thumbs}</aside>
        </div>
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
