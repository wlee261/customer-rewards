import { useEffect, useState } from "react";

import MonthlyTransactionTable from "./MonthlyTransactionTable";
//display all transactions, sorted by month by default
//two dropdown menus one that sets customer and one that sets month

const TransactionTable = ({
  selectedCustomer,
  selectedMonth,
  monthlyRewardPoints,
}) => {
  return selectedMonth.map((month) => {
    return (
      <MonthlyTransactionTable
        key={month}
        selectedMonth={month}
        selectedCustomer={
          selectedCustomer === "All Customers" ? null : selectedCustomer
        }
        rewardPoints={monthlyRewardPoints[month]}
      />
    );
  });
};

export default TransactionTable;
