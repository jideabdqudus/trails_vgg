import React from "react";
import { Alert } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AlertInfo = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id}>
      <Alert
        message={`${alert.msg}`}
        type={`${alert.type}`}
        closeText="Close Now"
      />
    </div>
  ));

AlertInfo.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertInfo);