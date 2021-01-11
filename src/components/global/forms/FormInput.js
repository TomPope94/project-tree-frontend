import React from "react";

const FormInput = ({ data }) => {
  const styling = {
    inputContainer: {
      height: 25,
      width: 150,
      borderRadius: 3,
      border: "1px solid rgba(0,0,0,0.5)",
    },
  };

  return (
    <input
      style={styling.inputContainer}
      type={data.type}
      placeholder={data.placeholder}
      name={data.name}
    />
  );
};

export default FormInput;
