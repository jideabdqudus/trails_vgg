import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programmeName: "",
      programmeCode: "",
      location: null,
      programmeDescription: ""
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  continueToSustainableGoals = () => {
    const {
      programmeName,
      programmeCode,
      location,
      programmeDescription
    } = this.state;

    let formRecord = {
      programmeName,
      programmeCode,
      location,
      programmeDescription
    };

    this.props.history.push({
      pathname: "/",
      state: formRecord
    });
  };

  render() {
    const {
      programmeName,
      programmeCode,
      location,
      programmeDescription
    } = this.state;
    return (
      <>
        <div>
          <input
            type="text"
            name={"programmeName"}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name={"programmeCode"}
            onChange={this.handleChange}
          />
          <input type="text" name={"location"} onChange={this.handleChange} />
          <input
            type="text"
            name={"programmeDescription"}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.continueToSustainableGoals}>
          save and continue
        </button>
      </>
    );
  }
}

export default Form;
