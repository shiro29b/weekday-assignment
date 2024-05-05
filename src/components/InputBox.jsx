import React, { useRef, useEffect, useState } from "react";

import Select from "react-select";
import "./InputBox.css";

const InputBox = ({ data }) => {
  return (
    <>
      <Select
        isMulti
        styles={{
          control: (provided, state) => ({
            ...provided,
            boxShadow: "none",
            color: "#000000",
            width: "100%",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#00AEEC" : "inherit",
            color: "black",
          }),
        }}
        placeholder={data.hintText}
        name="role"
        options={rolearray}
        className="basic-multi-select"
        classNamePrefix={data.hintText}
      />
    </>
  );
};

export default InputBox;
const rolearray = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "FullStack" },
];
