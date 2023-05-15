import { useState, useEffect } from "react";

import getLastThreeMonths from "./utils/getLastThreeMonths";
import { getMonthlyRewardPoints } from "./api/fetchTransactionData.api";

import TransactionTable from "./components/TransactionTable";
import TableHeader from "./components/TableHeader";

function App() {
  const [lastThreeMonths, setLastThreeMonths] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("All Customers");
  const [selectedMonth, setSelectedMonth] = useState("All Months");
  const [monthlyRewardPoints, setMonthlyRewardPoints] = useState({});

  useEffect(() => {
    setLastThreeMonths(getLastThreeMonths());
    getMonthlyRewardPoints().then((data) => setMonthlyRewardPoints(data));
  }, []);

  useEffect(() => {
    getMonthlyRewardPoints(
      selectedCustomer !== "All Customers" ? selectedCustomer : null
    ).then((data) => setMonthlyRewardPoints(data));
  }, [selectedCustomer]);

  return (
    <div className="App">
      <TableHeader
        lastThreeMonths={lastThreeMonths}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        monthlyRewardPoints={monthlyRewardPoints}
      />
      <TransactionTable
        selectedCustomer={selectedCustomer}
        selectedMonth={
          selectedMonth === "All Months" ? lastThreeMonths : [selectedMonth]
        }
        monthlyRewardPoints={monthlyRewardPoints}
      />
    </div>
  );
}

export default App;
