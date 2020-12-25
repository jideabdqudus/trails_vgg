import React, { Component } from "react";
import { Card } from "antd";
import ImpactManager from "../../ImpactManager/ImpactManager";

export class ImpactForm extends Component {
  render() {
    return (
      <div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Card title={"Create your Custom Impact"}>
            <ImpactManager/>
          </Card>
        </div>
      </div>
    );
  }
}

export default ImpactForm;
