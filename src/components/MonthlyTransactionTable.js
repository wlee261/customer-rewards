import React, { useCallback, useEffect } from "react";

import { fetchTransactionsByMonthAndCustomer } from "../api/fetchTransactionData.api";
import useFetch from "../hooks/useFetch";

import "../styles/MonthlyTransactionTable.css";

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

  const renderTableBody = useCallback(() => {
    if (transactions.length !== 0) {
      return transactions?.map(
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
              <td>${transactionAmount}</td>
              <td>{transactionDate}</td>
              <td>{rewardPoints}</td>
            </tr>
          );
        }
      );
    } else {
      return (
        <tr>
          <td>No transactions available</td>
          <td> - </td>
          <td> - </td>
          <td> - </td>
          <td> - </td>
        </tr>
      );
    }
  }, [transactions]);

  if (loading) return <span>Loading...</span>;
  else if (error) return <span>Something went wrong...</span>;
  else
    return (
      <div>
        <div>
          <h2>{selectedMonth}</h2>
          <h4>Points This Month: {rewardPoints}</h4>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Transaction ID</th>
                <th>Transaction Amount</th>
                <th>Transaction Date</th>
                <th>Reward Points</th>
              </tr>
            </thead>
            <tbody>{renderTableBody()}</tbody>
          </table>
        </div>
      </div>
    );
};

export default MonthlyTransactionTable;
