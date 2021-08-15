import React, { useEffect } from 'react';
import axios from 'axios';
import {
  AccountRow,
  AmountRow,
  CompanyRow,
  DataRow,
  DateRow,
  HeaderRow,
  GridContainer,
} from './Statement.style';
import { calculateTotalAmount, currencyFormatter, dateFormatter } from '../../utils/formatter'
import { useErrorHandler } from 'react-error-boundary';
import { Transaction } from './Transaction.model';

const Statement = () => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [total, setTotal] = React.useState(0);
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
          setTotal(calculateTotalAmount(transactions));
        }
      })
      .catch((err) => {
        handleError(err); 
      });
  }, [pageNumber]);

  

  const Row = (index: number, t: Transaction) => {
    return (
      <DataRow key={index} aria-label='dataRow'>
        <DateRow>{dateFormatter(t.Date)}</DateRow>
        <CompanyRow>{t.Company}</CompanyRow>
        <AccountRow>{t.Ledger}</AccountRow>
        <AmountRow>{currencyFormatter(t.Amount)}</AmountRow>
      </DataRow>
    );
  };

  return (
    <GridContainer>
      <HeaderRow aria-label='headerRow'>
        <DateRow>Date</DateRow>
        <CompanyRow>Company</CompanyRow>
        <AccountRow>Account</AccountRow>
        <AmountRow>{currencyFormatter(total)}</AmountRow>
      </HeaderRow>
      {transactions
        ? transactions.map((transaction, index) => Row(index, transaction))
        : 'No Data Found!'}
    </GridContainer>
  );
};

export default Statement;