import React, { Component } from "react";
const searchBox = ({ value, onChange }) => {
  return (
    <div className="m-5">
      <input
        placeholder="Search by name..."
        type="text"
        id="search"
        className="form-control control-form-lg"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};
export default searchBox;
