import React, { useState } from "react";

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
    <div>
      <select value={dropdownValue} onChange={handleSelect}>
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
