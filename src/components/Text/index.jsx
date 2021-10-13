import React from "react";
import "./Text.scss";

const Text = ({ children, fontWeight = "regular", className, ...rest }) => {
  return (
    <span {...rest} className={`text text--${fontWeight} ${className}`}>
      {children}
    </span>
  );
};

export const HeaderText = ({children, className, ...rest}) => {
    return (
        <h2 {...rest} className = {`text--header ${className}`}>
            <Text {...rest}>{children}</Text>
        </h2>
    )
}
export default Text;
