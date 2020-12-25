import React from "react";
import PropTypes from "prop-types";

const IndicatorView = props => {
  return (
    <ul>
      <li>{props.indicator}</li>
    </ul>
  );
};

IndicatorView.defaultProps = {};

IndicatorView.propTypes = {};

export default IndicatorView;
