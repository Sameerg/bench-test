import format from 'date-fns/format';
import { Transaction } from '../components/Statement/Transaction.model';
/**
 * This method formats the currency
 * @param amount 
 */
export const currencyFormatter = (amount: Number | string) => {
  const number = typeof amount === 'number' ? amount : Number(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

/**
 * This method formats the date to MMM do Y format
 * @param date 
 */
export const dateFormatter = (date: string) => {
  try {
    return format(new Date(date), 'MMM do, Y');
  } catch (error) {
    return '';
  }
};

/**
 * This method calculate the total transactions amount
 * @param transactions 
 */
export const calculateTotalAmount = (transactions: Transaction[]) => {
  return transactions.reduce(
      (acc: number, transaction: Transaction) =>
        acc + Number(transaction.Amount),
      0
    
  );
}
