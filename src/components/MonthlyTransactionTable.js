import React, { useEffect } from "react";

import { fetchTransactionsByMonthAndCustomer } from "../api/fetchTransactionData.api";
import useFetch from "../hooks/useFetch";

const MonthlyTransactionTable = ({
  selectedMonth,
  selectedCustomer,
  rewardPoints,
}) => {
  const {
    data: transactions,
    error,
    loading,
    refetcher,
  } = useFetch(
    fetchTransactionsByMonthAndCustomer,
    selectedMonth,
    selectedCustomer
  );

  useEffect(() => {
    refetcher();
  }, [selectedMonth, selectedCustomer]);

  return (
    <div>
      <h3>{selectedMonth}</h3>
      <h4>Points This Month: {rewardPoints}</h4>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Transaction ID</th>
            <th>Transaction Amount</th>
            <th>Transaction Date</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map(
            ({
              transactionId,
              customerId,
              transactionAmount,
              transactionDate,
              rewardPoints,
            }) => {
              return (
                <tr key={transactionId}>
                  <td>{customerId}</td>
                  <td>{transactionId}</td>
                  <td>{transactionAmount}</td>
                  <td>{transactionDate}</td>
                  <td>{rewardPoints}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyTransactionTable;
