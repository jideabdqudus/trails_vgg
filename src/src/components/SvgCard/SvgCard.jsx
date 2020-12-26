import React from "react";
import PropTypes from "prop-types";

const SvgCard = props => {
  const {onClick,opacity} = props;
  return (
    <>
      <img href="svg" onClick={onClick} src={props.path} style={{ width: "10%", opacity:`${opacity}`,cursor:"pointer",padding:".2rem" }} />
    </>
  );
};

SvgCard.defaultProps = {
  path: "/sdgs/E_SDG_PRINT-01.svg",
  opacity:"0.3"
};

SvgCard.propTypes = {
  path: PropTypes.string,
  opacity:PropTypes.string
};

export default SvgCard;
