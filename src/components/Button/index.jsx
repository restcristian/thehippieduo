import React from "react";
import "./Button.scss";
const Button = ({
  type = "button",
  className,
  children,
  size = "large",
  animationDirection = "right",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`button ${className} button--${size} button--direction-${animationDirection}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
