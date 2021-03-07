import React, { Component } from "react";
import { Card, Skeleton } from "antd";
import "./index.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { connect } from "react-redux";

export class ImpactMap extends Component {
  constructor(props) {
    super(props);
  }

  displayMarkers = () => {
    return this.props.project.projects.map((project) => {
      return (
        <Marker
          key={project.mapCenter.lng}
          id={project.mapCenter.lng}
          position={{
            lat: project.mapCenter.lat,
            lng: project.mapCenter.lng,
          }}
          onClick={() => console.log(`You clicked me! ${project}`)}
        />
      );
    });
  };

  render() {
    {
      console.log(this.props.google);
    }
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
                lat: this.props.project.projects[0].mapCenter.lat,
                lng: this.props.project.projects[0].mapCenter.lng,
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
  project: state.projects,
});

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ",
})(ImpactMap);

export default connect(mapStateToProps, {})(WrappedContainer);
