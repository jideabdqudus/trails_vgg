import React from "react";
import PropTypes from "prop-types";

const SvgCardView = props => {
  const {width} = props;
  return (
    <>
      <img href="svg" src={props.path} style={{ width: `${width}`,padding:".2rem" }} />
    </>
  );
};

SvgCardView.defaultProps = {
  path: "/sdgs/E_SDG_PRINT-01.svg",
  opacity:"1",
  width:"20%"
};

SvgCardView.propTypes = {
  path: PropTypes.string,
  width:PropTypes.string
};

export default SvgCardView;
