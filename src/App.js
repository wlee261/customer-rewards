import { useState, useEffect } from "react";
import TransactionTable from "./components/TransactionTable";

import getLastThreeMonths from "./utils/getLastThreeMonths";
import TableHeader from "./components/TableHeader";

function App() {
  const [lastThreeMonths, setLastThreeMonths] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("All Customers");
  const [selectedMonth, setSelectedMonth] = useState("All Months");

  useEffect(() => {
    setLastThreeMonths(getLastThreeMonths());
  }, []);

  return (
    <div className="App">
      <TableHeader
        lastThreeMonths={lastThreeMonths}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <TransactionTable
        selectedCustomer={selectedCustomer}
        selectedMonth={
          selectedMonth === "All Months" ? lastThreeMonths : [selectedMonth]
        }
      />
    </div>
  );
}

export default App;
