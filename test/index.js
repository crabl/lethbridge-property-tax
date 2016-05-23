import assert from 'assert';
import lethbridge from '../lib';

describe('lethbridge-property-tax', () => {
  it('calculates correct tax amount for current year', () => {
    assert.equal(lethbridge(230000), 2385.10);
  });

  it('calculates correct tax amount for previous years', () => {
    assert.equal(lethbridge(230000, 2015), 2335.19);
  });

  it('throws an error if no mill rates for that year', () => {
    assert.throws(() => lethbridge(230000, 1997), Error);
  });
});
