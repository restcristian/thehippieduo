import React from "react";
import { Link } from "gatsby";

import "./Button.scss";
const Button = ({
  type = "button",
  className,
  children,
  size = "large",
  animationDirection = "right",
  isLink = false,
  redirectTo = undefined,
  isExternal = true,
  ...rest
}) => {
  if (isLink) {
    if (isExternal) {
      return (
        <a
          {...rest}
          href={redirectTo}
          target="_blank"
          className={`button ${className} button--link button--${size} button--direction-${animationDirection}`}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          {...rest}
          to={redirectTo}
          className={`button ${className} button--link button--${size} button--direction-${animationDirection}`}
        >
          {children}
        </Link>
      );
    }
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
