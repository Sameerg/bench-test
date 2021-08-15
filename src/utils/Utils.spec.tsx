import { Transaction } from '../components/Statement/Transaction.model';
import { calculateTotalAmount, currencyFormatter, dateFormatter } from './Utils';

test('should format amount', () => {
  let formatted = currencyFormatter('100');
  expect(formatted).toEqual('$100.00');
});

test('should format negative amount', () => {
  let formatted = currencyFormatter('-10');
  expect(formatted).toEqual('-$10.00');
});


test('should format amount to 2 decimal places', () => {
  let formatted = currencyFormatter('10.3414573');
  expect(formatted).toEqual('$10.34');
});

test('should format date', () => {
  let formatted = dateFormatter('2013-12-22');
  expect(formatted).toEqual('Dec 22nd, 2013');
});

test('should handle date as empty string', () => {
  let formatted = dateFormatter('');
  expect(formatted).toEqual('');
});

test('should able to calulate transactions sum', () => {
  const transactions: Transaction[] = [
    {
      Date: '2013-12-22',
      Ledger: 'Phone & Internet Expense',
      Amount: '-110.01',
      Company: 'SHAW CABLESYSTEMS CALGARY AB',
    },{
      Date: '2013-12-22',
      Ledger: 'Phone & Internet Expense',
      Amount: '-10.00',
      Company: 'SHAW CABLESYSTEMS CALGARY AB',
    },
  ];
  let total = calculateTotalAmount(transactions);
  expect(total).toEqual(-120.01);
});

