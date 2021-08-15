import format from "date-fns/format";

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const dateFormatter = (date: string) => {
  return format(new Date(date), "MMM do, Y");
};