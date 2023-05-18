import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import TableDropdown from "../components/TableDropdown";
import { act } from "react-dom/test-utils";

it("Should render a dropdown table with options: All, 1, 2, 3, 4", () => {
  const dropdownOptions = [1, 2, 3, 4];
  act(() => {
    render(
      <TableDropdown dropdownOptions={dropdownOptions} dropdownType={"types"} />
    );
  });

  //access select and option element
  const selectElement = screen.getByRole("combobox");
  const optionElements = screen.getAllByRole("option");

  //assert that select element is on the screen
  expect(selectElement).toBeInTheDocument();

  //assert that the dropdown options have correct values
  expect(optionElements).toHaveLength(5);
  expect(optionElements[0]).toHaveValue("All types");
  expect(optionElements[1]).toHaveValue("1");
  expect(optionElements[2]).toHaveValue("2");
  expect(optionElements[3]).toHaveValue("3");
  expect(optionElements[4]).toHaveValue("4");
});
