import React, { useState, useEffect } from "react";
import TableDropdown from "./TableDropdown";

import { fetchAllCustomerIds } from "../api/fetchTransactionData.api";

import "../styles/TableHeader.css";

const TableHeader = ({
  lastThreeMonths,
  selectedCustomer,
  setSelectedCustomer,
  selectedMonth,
  setSelectedMonth,
  monthlyRewardPoints,
}) => {
  const [customerIds, setCustomerIds] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    fetchAllCustomerIds().then((data) => setCustomerIds([...data]));
  }, []);

  useEffect(() => {
    let totalRewardPoints = 0;
    for (let month in monthlyRewardPoints) {
      totalRewardPoints += monthlyRewardPoints[month];
    }
    setTotalPoints(totalRewardPoints);
  }, [monthlyRewardPoints]);

  return (
    <div className="header-container">
      <div className="info-heading-container">
        <h2>Showing: {selectedCustomer}</h2>
        <h3>Total Points: {totalPoints}</h3>
      </div>
      <div className="dropdown-container">
        <span>Customer: </span>
        <TableDropdown
          dropdownOptions={customerIds}
          dropdownType="Customers"
          dropdownValue={selectedCustomer}
          setValue={setSelectedCustomer}
        />
        <span>Month: </span>
        <TableDropdown
          dropdownOptions={lastThreeMonths}
          dropdownType="Months"
          dropdownValue={selectedMonth}
          setValue={setSelectedMonth}
        />
      </div>
    </div>
  );
};

export default TableHeader;
