'use strict';

import historicalMillRates from './millRates';

const currentYear = 2018;

function round(amount) {
  return Math.round(amount * 100) / 100;
}

export default function LethbridgePropertyTax(propertyValue, year=currentYear) {
  const millRates = historicalMillRates[year];

  if (!millRates) {
    throw new Error(`no mill rates defined for the year ${year}`)
  }

  const totalTax = millRates.reduce((total, {rate}) =>
    total + round(propertyValue * rate), 0);

  return round(totalTax);
}
