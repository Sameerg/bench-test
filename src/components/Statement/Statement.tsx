import React, { useEffect, useState } from "react";
import axios from "axios";

const Statement = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(`https://resttest.bench.co/transactions/${pageNumber}.json`)
      .then((response) => {
        setTransactions([...transactions,...response.data.transactions]);
        let noOfPages: number = Math.ceil(response.data.totalCount / 10);
        if (pageNumber < noOfPages) {
          setPageNumber(pageNumber + 1);
        } else {
          // All data fetched
          console.log(transactions);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  return <div>{transactions.length}</div>;
};

export default Statement;

interface Transaction {
  Date: string;
  Ledger: string;
  Amount: string;
  Company: string;
}
