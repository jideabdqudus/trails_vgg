import React from "react";
import { Link } from "react-router-dom";

class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordFromHomePage: {},
      formRecord: {}
    };
  }

  componentDidMount = () => {
    const pathState = this.props.location.state;
    if (pathState) {
      console.log("pathState", pathState);
      this.setState({
        recordFromHomePage: pathState.record,
        formRecord: pathState.formRecord
      });
    }
  };

  postToEndpoint = () => {
    //Get all the data you need from state
    //construct a payload with the data
    //post to the endpoint
    const { recordFromHomePage, formRecord } = this.state;

    let payload = {
      programmeName: formRecord.programmeName,
      programmeCode: formRecord.programmeCode,
      programmeDescription: formRecord.programmeDescription,
      selectedSvg: recordFromHomePage.image
    };
    console.log(payload);

    //POST 
  };
  render() {
    const { recordFromHomePage, formRecord } = this.state;
    let info = recordFromHomePage.information;
    console.log(formRecord);
    return (
      <div>
        <Link className="links" to="/">
          Go to Home
        </Link>
        <Link className="links" to="/demo">
          Go to Demo
        </Link>

        <h1>Demo</h1>
        <img src={recordFromHomePage.image} width={50} alt="img1" />
        {info &&
          info.map((record, i) => {
            console.log(record);

            return (
              <div>
                <input type={"checkbox"}></input>
                <span>{record}</span>
              </div>
            );
          })}
        {formRecord && <p>{formRecord.programmeName}</p>}
        {/* Let's say this is the final process and 
         you want to post all information to the endpoint */}
        <button onClick={this.postToEndpoint}>Save</button>
      </div>
    );
  }
}

export default Demo1;
