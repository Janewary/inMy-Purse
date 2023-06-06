import React from "react";
import PropTypes from "prop-types";

const DateLabel = (props) => {
  const year = props.date.getFullYear();
  const month = ("00" + (props.date.getMonth() + 1)).slice(-2);
  const day = ("00" + props.date.getDate()).slice(-2);

  return (
    <span className="fs-small fw-light">
      {year}-{month}-{day}
    </span>
  );
};

export default DateLabel;

DateLabel.propTypes = {
  date: PropTypes.node.isRequired,
};
