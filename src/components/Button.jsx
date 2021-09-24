import React from "react";

const Button = (props) => {
  const { btnStyle, text } = props;
  return (
    <>
      <button
        type="button"
        className={`btn col-xs-12  mb-2 h-common-btn ${btnStyle}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
