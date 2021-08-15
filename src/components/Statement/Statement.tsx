import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AccountRow,
  AmountRow,
  CompanyRow,
  DataRow,
  DateRow,
  HeaderRow,
  GridContainer,
} from "./Statement.style";
import { currencyFormatter, dateFormatter } from '../../utils/formatter'
import { useErrorHandler } from 'react-error-boundary';

const Statement = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0);
  const handleError = useErrorHandler()

  useEffect(() => {
    axios
      .get(`https://resttest.bench.co/transactions/${pageNumber}.json`)
      .then((response) => {
        setTransactions([...transactions, ...response.data.transactions]);
        let noOfPages: number = Math.ceil(response.data.totalCount / 10);
        if (pageNumber < noOfPages) {
          setPageNumber(pageNumber + 1);
        } else {
          // All data fetched
          setTotal(
            transactions.reduce(
              (acc: number, transaction: Transaction) =>
                acc + Number(transaction.Amount),
              0
            )
          );
        }
      })
      .catch((err) => {
        handleError(err); 
      });
  }, [pageNumber]);

  const Row = (index: number, t: Transaction) => {
    return (
      <DataRow key={index}>
        <DateRow>{dateFormatter(t.Date)}</DateRow>
        <CompanyRow>{t.Company}</CompanyRow>
        <AccountRow>{t.Ledger}</AccountRow>
        <AmountRow>{currencyFormatter.format(t.Amount)}</AmountRow>
      </DataRow>
    );
  };

  return (
    <GridContainer>
      <HeaderRow>
        <DateRow>Date</DateRow>
        <CompanyRow>Company</CompanyRow>
        <AccountRow>Account</AccountRow>
        <AmountRow>{currencyFormatter.format(total)}</AmountRow>
      </HeaderRow>
      {transactions
        ? transactions.map((transaction, index) => Row(index, transaction))
        : "No Data Found!"}
    </GridContainer>
  );
};

export default Statement;

interface Transaction {
  Date: string;
  Ledger: string;
  Amount: number;
  Company: string;
}
