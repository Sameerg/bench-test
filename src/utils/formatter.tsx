import format from 'date-fns/format';

export const currencyFormatter = (amount: Number | string) => {
  const number = typeof amount === 'number' ? amount : Number(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const dateFormatter = (date: string) => {
  try {
    return format(new Date(date), 'MMM do, Y');
  } catch (error) {
    return '';
  }
};
