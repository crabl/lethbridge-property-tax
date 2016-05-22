'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = LethbridgePropertyTax;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _millRates = require('./millRates');

var _millRates2 = _interopRequireDefault(_millRates);

var currentYear = 2016;

function round(amount) {
  return Math.round(amount * 100) / 100;
}

function LethbridgePropertyTax(propertyValue) {
  var year = arguments.length <= 1 || arguments[1] === undefined ? currentYear : arguments[1];

  var millRates = _millRates2['default'][year];

  if (!millRates) {
    throw new Error('no mill rates defined for the year ' + year);
  }

  var totalTax = millRates.reduce(function (total, _ref) {
    var rate = _ref.rate;
    return total + round(propertyValue * rate);
  }, 0);

  return round(totalTax);
}

module.exports = exports['default'];