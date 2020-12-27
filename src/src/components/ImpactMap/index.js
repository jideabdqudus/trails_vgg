import React, { Component } from "react";
import { Card, Skeleton } from "antd";
import "./index.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import IconPoint from "./icon-map.svg";
import L from "leaflet";

const iconPerson = new L.Icon({
  iconUrl: IconPoint,
  iconRetinaUrl: IconPoint,
  iconAnchor: null,
  popupAnchor: [40, -26],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50, 55),
});

const skater = new Icon({
  iconUrl: "./icon-map.svg",
  iconSize: [25, 25],
});

export class ImpactMap extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            marginLeft: "10px",
            marginTop: "0",
            paddingTop: "0px",
          }}
        >
          <h3>Impact Areas</h3>
        </div>
        <div className={"impactCard"}>
          {/* <Skeleton active /> */}
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ width: "100%", height: "300px", margin: "0" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={iconPerson}>
              <Popup>
                <div
                  style={{
                    backgroundColor: "#F0F2F5",
                    padding: "5px",
                    margin: 0,
                  }}
                >
                  {" "}
                  {"Kafanchan"}
                  <br />
                  {"Kaduna State Nigeria"}
                </div>

                <hr />
                {"Home Grown School Feeding (HGSF)"}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div></div>
      </div>
    );
  }
}

export default ImpactMap;
