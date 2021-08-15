import React from "react";
import "./Grid.scss";

const Grid = ({ children, className, ...rest }) => {
  return <div {...rest} className={`grid ${className}`}>{children}</div>;
};

export default Grid;
