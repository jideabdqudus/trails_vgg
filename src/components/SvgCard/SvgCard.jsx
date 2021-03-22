import React from "react";
import PropTypes from "prop-types";

const SvgCard = props => {
  const {onClick,opacity,alt,height,width} = props;
  return (
    <>
      <img href="svg" alt={alt} onClick={onClick} src={props.path} style={{ width:`${width}px`, height: `${height}px`, opacity:`${opacity}`,cursor:"pointer",padding:".2rem" }} />
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
