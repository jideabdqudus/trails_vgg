import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Grid, FormControl } from "@material-ui/core";
import { Row, Col } from "antd";
import PlacesAutocomplete from "react-places-autocomplete";
import ImageUpload from "../Upload/ImageUpload";
import TopSpace from "../Space/TopSpace";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: 0,
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
    description,
    code,
    name,
    //projectLocation,
    formOneErrors,
    //locationsEnum,
    address,
    totalNumberOfBeneficiaries,
    budget,
    handleDrop,
    files,
  } = props;

  const { handleInputChange, handleChangePlace, handleSelectPlace } = props;

  return (
    <div className={`flex items-center ${classes.root}`}>
      <Row>
        <Col span={5}>
          <h4 className="m-0 p-0">Banner Image</h4>
          <TopSpace length={6} />
          <ImageUpload handleDrop={handleDrop} files={files} />
        </Col>
      </Row>
      <TopSpace length={10} />
      <Row>
        <Col span={8}>
          <form className={classes.container} noValidate>
            <h4 for="project-name" style={{ margin: 0 }}>
              Programme Name
            </h4>
            <TextField
              id="project-name"
              error={formOneErrors.name}
              name={"name"}
              value={name}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </form>
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
          <form className={classes.container} noValidate>
            <h4 for="project-code" style={{ margin: 0 }}>
              Programme Budget
            </h4>
            <TextField
              id="project-budget"
              name={"budget"}
              error={formOneErrors.code}
              value={budget}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </form>
        </Col>
        <Col span={1}></Col>
        <Col span={5}>
          <form className={classes.container} noValidate>
            <h4 for="project-beneficiaries" style={{ margin: 0 }}>
              Total Number of Beneficiaries
            </h4>
            <TextField
              id="project-beneficiaries"
              name={"totalNumberOfBeneficiaries"}
              error={formOneErrors.code}
              value={totalNumberOfBeneficiaries}
              className={classes.textField}
              margin="normal"
              type="number"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </form>
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
          <form className={classes.container} noValidate>
            <h4 for="project-code" style={{ margin: 0 }}>
              Programme Code
            </h4>
            <TextField
              id="project-code"
              name={"code"}
              error={formOneErrors.code}
              value={code}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </form>
        </Col>
        <Col span={10}>
          <form className={classes.container} noValidate>
            <h4 for="outlined-select-currency" style={{ margin: 0 }}>
              Programme Location
            </h4>
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
                      style={{
                        padding: "15px",
                        width: "100%",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        borderRadius: "4px",
                      }}
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
        </Col>
        <Col span={1}></Col>
      </Row>

      <Grid container spacing={3}>
        {/* Project Name */}

        {/* Project Banner */}
        <Grid item sm={3} md={3}></Grid>

        {/* Project Location */}
        <Grid item sm={3} md={3}></Grid>
      </Grid>

      {/* Second Row */}

      <Grid container spacing={8}>
        {/* Project Description */}
        <Grid item sm={4} md={12}>
          <form className={classes.container} noValidate>
            <h4 for="project-description" style={{ margin: 0 }}>
              Programme Description
            </h4>
            <TextField
              id="project-description"
              name={"description"}
              value={description}
              error={formOneErrors.description}
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
