import React from "react";
import "./Text.scss";

const Text = ({ children, fontWeight = "regular", style }) => {
  return (
    <span className={`text text--${fontWeight}`} style={{ ...style }}>
      {children}
    </span>
  );
};

export default Text;
