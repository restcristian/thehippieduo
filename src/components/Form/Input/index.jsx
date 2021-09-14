import React from "react";
import "./Input.scss";

const Input = ({ placeholder, value, onChange, required, ...rest }) => {
  const getFormattedPlaceholder = () => {
    return required ? `${placeholder} *` : placeholder;
  };

  return (
    <div className="input">
      <input
        className="input__controller"
        type="text"
        placeholder={getFormattedPlaceholder()}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
    </div>
  );
};

export default Input;
