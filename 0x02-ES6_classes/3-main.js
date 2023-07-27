import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());
try {
  const naira = new Currency(3, 'Naira');
} catch (err) {
  console.log(err)
}
const pound = new Currency('#', 'Pound');
console.log(pound.displayFullCurrency());
