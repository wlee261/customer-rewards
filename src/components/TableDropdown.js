import React, { useState } from "react";

import "../styles/TableDropdown.css";

const TableDropdown = ({
  dropdownOptions,
  dropdownType,
  dropdownValue,
  setValue,
}) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="dropdown-container">
      <select
        value={dropdownValue}
        onChange={handleSelect}
        className="dropdown"
      >
        <option value={`All ${dropdownType}`}>All {dropdownType}</option>
        {dropdownOptions.map((dropdownOption) => {
          return (
            <option value={dropdownOption} key={dropdownOption}>
              {dropdownOption}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TableDropdown;
