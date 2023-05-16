# Round Half to Even

A utility for tie-breaking rounding, also called Banker's Rounding or Commercial Rounding.

Read more: https://en.wikipedia.org/wiki/Rounding#Round_half_to_even

## Demo

https://rawgit.com/newbish/round-half-even/master/demo/index.html

## Installation

Using npm:

```sh
npm install --save @newbish/round-half-even
```

Or yarn:

```sh
yarn add @newbish/round-half-even
```

## Usage

```js
roundHalfEven(floatingPointValue, numberOfDecimals);
```

### Node.js

```js
import roundHalfEven from "round-half-even";
roundHalfEven(1.435, 2); // returns 1.44
```

### Within the browser:

```html
<script src="https://unpkg.com/round-half-even"></script>
<script>
  roundHalfEven(1.435, 2); // returns 1.44
</script>
```

## Development

Make changes to `src/index.js`. Generate the browser-ready package:

```sh
npm run build
```

or

```sh
yarn build
```

Run tests:

```sh
npm test
```

or

```sh
yarn test
```

## [MIT Licensed](LICENSE)
