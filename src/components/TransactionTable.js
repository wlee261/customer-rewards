import { useEffect, useState } from "react";
import { fetchAllTransactions } from "../api/fetchTransactions.api";

//display all transactions, sorted by month by default
//two dropdown menus one that sets customer and one that sets month

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);

  return <div>transaction table</div>;
};

export default TransactionTable;
