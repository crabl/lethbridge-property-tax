# taxes-lethbridge
> Lethbridge Historical Property Tax Tables

## Installation

```sh
$ npm install --save taxes-lethbridge
```

## Usage

```js
var lethbridge = require('taxes-lethbridge');

let year = 2016;
let assessedPropertyValue = 230000;

let taxAmount = lethbridge(assessedPropertyValue, year);
```

## Sources

[Current Mill Rates (updated May 2016)](http://www.lethbridge.ca/living-here/My-Taxes/Pages/Calculators/Residential.aspx)

[Historical Mill Rates](http://www.lethbridge.ca/living-here/My-Taxes/Pages/Historic-Mill-Rates.aspx)

## License

MIT © [crabl]()


[npm-image]: https://badge.fury.io/js/taxes-lethbridge.svg
[npm-url]: https://npmjs.org/package/taxes-lethbridge
[travis-image]: https://travis-ci.org/crabl/taxes-lethbridge.svg?branch=master
[travis-url]: https://travis-ci.org/crabl/taxes-lethbridge
[daviddm-image]: https://david-dm.org/crabl/taxes-lethbridge.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/crabl/taxes-lethbridge
