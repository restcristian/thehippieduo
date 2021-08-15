import React from "react";
import "./Text.scss";

const Text = ({ children, fontWeight = "regular", style }) => {
  return (
    <span className={`text text--${fontWeight}`} style={{ ...style }}>
      {children}
    </span>
  );
};

export const HeaderText = ({children}) => {
    return (
        <h2 className = 'text--header'>
            <Text>{children}</Text>
        </h2>
    )
}
export default Text;
