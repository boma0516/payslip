"use strict";

/**
 * Prints monthly payslip.
 * @param {string} name
 * @param {number} income
 * @param {number} tax
 */
const printResult = (name, income, tax) => {
  const monthlyIncome = calculateMonthlyValue(income);
  const monthlyTax = calculateMonthlyValue(tax);

  const result = `
    Monthly Payslip for: "${name}"
    Gross Monthly Income: $${monthlyIncome.toFixed(2)}
    Monthly Income Tax: $${monthlyTax.toFixed(2)}
    Net Monthly Income: $${monthlyIncome.toFixed(2) - monthlyTax.toFixed(2)}
  `;

  console.log(result);
};

/**
 * Calculates monthly value from an annual value.
 * @param {number} value Annual value, such as annual income.
 * @returns Monthly value, such as monthly income.
 */
const calculateMonthlyValue = (value) => {
  const MONTHS_A_YEAR = 12;
  return value / MONTHS_A_YEAR;
};

module.exports = { printResult };
