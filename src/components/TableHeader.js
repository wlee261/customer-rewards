import React, { useState, useEffect } from "react";
import TableDropdown from "./TableDropdown";

import { fetchAllCustomerIds } from "../api/fetchTransactionData.api";

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
    <div>
      <h2>Showing: {selectedCustomer}</h2>
      <h3>Total Points: {totalPoints}</h3>
      <TableDropdown
        dropdownOptions={customerIds}
        dropdownType="Customers"
        dropdownValue={selectedCustomer}
        setValue={setSelectedCustomer}
      />
      <TableDropdown
        dropdownOptions={lastThreeMonths}
        dropdownType="Months"
        dropdownValue={selectedMonth}
        setValue={setSelectedMonth}
      />
    </div>
  );
};

export default TableHeader;
