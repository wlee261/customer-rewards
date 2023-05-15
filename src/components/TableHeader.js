import React, { useState, useEffect } from "react";
import TableDropdown from "./TableDropdown";

import { fetchAllCustomerIds } from "../api/fetchTransactions.api";

const TableHeader = ({
  lastThreeMonths,
  selectedCustomer,
  setSelectedCustomer,
  selectedMonth,
  setSelectedMonth,
}) => {
  const [customerIds, setCustomerIds] = useState([]);

  useEffect(() => {
    fetchAllCustomerIds().then((data) => setCustomerIds([...data]));
  }, []);

  return (
    <div>
      <h2>Showing: {selectedCustomer}</h2>
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
