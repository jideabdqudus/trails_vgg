import React from "react";
import PropTypes from "prop-types";

const IndicatorView = props => {
  return (
      <>
<label style={{fontSize:"15px"}}>{" - "}{props.indicator}</label>
      </>
  );
};

IndicatorView.defaultProps = {};

IndicatorView.propTypes = {};

export default IndicatorView;
