import format from "date-fns/format";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const dateFormatter = (date: string) => {
  return format(new Date(date), "MMM do, Y");
};

export { currencyFormatter, dateFormatter };
