import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import TableHeader from "../components/TableHeader";

jest.mock("../components/TableDropdown", () => () => (
  <div data-testid="mocked-dropdown"></div>
));

it("Should render headers which describe current customer and total number of points", () => {
  const selectedCustomer = "Current Customer";
  const monthlyRewardPoints = {
    "2023-05": 200,
    "2023-04": 100,
    "2023-03": 150,
  };
  act(() => {
    render(
      <TableHeader
        selectedCustomer={selectedCustomer}
        monthlyRewardPoints={monthlyRewardPoints}
      />
    );
  });

  //access h2 and h3 which shows current customer and total points
  const customerHeader = screen.getByRole("heading", {
    name: "Showing: Current Customer",
  });
  const pointsHeader = screen.getByRole("heading", {
    name: "Total Points: 450",
  });

  //assert that h2 and h3element is in document
  expect(customerHeader).toBeInTheDocument();
  expect(pointsHeader).toBeInTheDocument();

  //assert that the text content of h2 and h3 elements are correct
  expect(customerHeader).toHaveTextContent("Showing: Current Customer");
  expect(pointsHeader).toHaveTextContent("Total Points: 450");
});

it("should render two TableDropdown components", () => {
  act(() => {
    render(<TableHeader />);
  });
  //get mocked dropdown menus, should be array of length 2
  const dropdownMocks = screen.getAllByTestId("mocked-dropdown");
  expect(dropdownMocks.length).toBe(2);
});
