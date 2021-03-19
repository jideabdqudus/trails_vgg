import React, { Component } from "react";
import { Card, Skeleton } from "antd";
import "./index.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { connect } from "react-redux";
import { random } from "lodash";

export class ImpactMap extends Component {
  constructor(props) {
    super(props);
  }
  displayMarkers = () => {
    return this.props.programs.programs?.map((program) => {
      console.log(program)
      return (
        <Marker
          key={program?.locations[0]?.long}
          id={program?.locations[0]?.long}
          position={{
            lat: program?.locations[0]?.lat,
            lng: program?.locations[0]?.long,
          }} 
          onClick={() => console.log(`You clicked me! ${program?.name}`)}
        />
      );
    });
  };

  render() {
    return (
      <div className="impactT">
        <h4>Impact Map</h4>
        {this.props.google == undefined ? (
          <Card>
            <Skeleton active />
            <br/>
          </Card> 
        ) : (
          <div className="map-container">
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{
                lat:  this.props.programs.programs[0]?.locations[0]?.lat,
                lng:  this.props.programs.programs[0]?.locations[0]?.long,
              }}
            >
              {this.displayMarkers()}
            </Map>
          </div>
        )}
      </div>
    );
  }
}

const mapStyles = {
  width: "100%",
  height: "100%",
};

const mapStateToProps = (state) => ({
  programs: state.projects,
});

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ",
})(ImpactMap);

export default connect(mapStateToProps, {})(WrappedContainer);
