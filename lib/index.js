'use strict';

// Source: http://www.lethbridge.ca/living-here/My-Taxes/Pages/Calculators/Residential.aspx (Updated May 2016)

const taxes = {
  2015: [
    { name: 'propertyTax', rate: 0.007614 },
    { name: 'educationTax', rate: 0.002413 },
    { name: 'greenAcresTax', rate: 0.000126 }
  ],

  2016: [
    { name: 'propertyTax', rate: 0.007827 },
    { name: 'educationTax', rate: 0.002414 },
    { name: 'greenAcresTax', rate: 0.000129 }
  ]
};

const currentYear = 2016;

export default function LethbridgePropertyTax(propertyValue, year=currentYear) {
  const millRates = taxes[year];

  if (!millRates) {
    throw new Error(`no mill rates defined for the year ${year}`)
  }

  const totalTax = millRates.reduce((totalTax, tax) =>
    totalTax + Math.round(propertyValue * 100 * tax.rate) / 100, 0);

  return Math.round(totalTax * 100) / 100;
}
