import React, { useRef, useEffect, useState } from "react";

import "./Card.css";
import InputBox from "./InputBox";

const FilterComponent = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px",
          gap: "10px",

          borderRadius: "6px",
          flexWrap: "wrap",
          marginLeft: "25px",
          marginTop: "25px",
        }}
      >
        <InputBox data={{ hintText: "Roles" }}></InputBox>
        <InputBox data={{ hintText: "Number of employees" }}></InputBox>
        <InputBox data={{ hintText: "Experience" }}></InputBox>
        <InputBox data={{ hintText: "Remote" }}></InputBox>

        <InputBox data={{ hintText: "Minimum base pay salary" }}></InputBox>
        <input
          style={{
            backgroundColor: "white",
            outline: "none",
            color: "black",
            borderRadius: "6px",
            padding: "10px",
            border: "1px solid rgb(204,204,204)",
          }}
          placeholder="Search Company Name"
        ></input>
      </div>
    </>
  );
};

export default FilterComponent;
