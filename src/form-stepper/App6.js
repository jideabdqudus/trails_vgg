import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "google",
          image:
            "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
          information: ["info 1", "info 2", "info 3"],
        },
        {
          id: 2,
          name: "firefox",
          image:
            "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png",
          information: ["info 4", "info 5", "info 6"],
        },
        {
          id: 3,
          name: "facebook",
          image:
            "http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png",
          information: ["info 7", "info 8", "info 9"],
        },
      ],
      formRecord: {},
    };
  }

  componentDidMount = () => {
    const pathState = this.props.location.state;
    //console.log(pathState)
     //console.log(this.props.location)
    if (pathState !== undefined) {
      this.setState({ formRecord: pathState });
    }
    // else {
    //   console.log("Path State is Underfined")
    // }
  };

  navigateToDemo2 = (record) => {
    const { formRecord } = this.state;
    // console.log(record);
    // console.log(this.props);
    this.props.history.push({
      pathname: "/demo",
      state: {
        record,
        formRecord,
      },
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Link className="links" to="/">
          Go to Home
        </Link>
        <Link className="links" to="/demo">
          Go to Demo
        </Link>
        <Link className="links" to="/form">
          Go to Form
        </Link>
        <h1>Home</h1>
        {data.map((record, i) => {
          return (
            <div
            key={record.id}
              onClick={() => this.navigateToDemo2(record)}
              style={{ display: "inline" }}
            >
              <img src={record.image} alt={"img"} width={100} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
