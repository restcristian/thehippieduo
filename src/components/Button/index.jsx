import React from "react";
import "./Button.scss";
const Button = ({
  type = "button",
  className,
  children,
  size = "large",
  animationDirection = "right",
  isLink = false,
  redirectTo = undefined,
  ...rest
}) => {

  if(isLink) {
    return (
      <a
      {...rest}
      href = {redirectTo}
      target = "_blank"
      className={`button ${className} button--link button--${size} button--direction-${animationDirection}`}
    >
      {children}
    </a>
    )
  }
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
