# array-without
[![codecov](https://codecov.io/gh/ardeshireshghi/array-without/branch/master/graph/badge.svg)](https://codecov.io/gh/ardeshireshghi/array-without)

Lightweight and fast `arrayWithout` which excludes values from array and creates a new copy. It is written with [performance](#high-performance) in mind.

# Install
`npm install array-without-fast`

# Usage
```
const arrayWithout = require('array-without-fast');

// ES6 import
import arrayWithout from 'array-without-fast';

const data = [1, 'foo', 10, 25, 'extra', 40, 11, 'apple'];

// Pass exclude values as array
const filteredData = arrayWithout(data, [10, 'extra', 11]);

// Pass exclude values as arguments
const filteredData = arrayWithout(data, 10, 'extra', 11);

// Output
// [1, 'foo', 25, 40, 'apple']
```
# High Performance

Below is a test which compares it with Lodash `_.without`. It creates a range of 1 to 1000 and a random subset roughly the size of 500 that will be excluded from the array. It repeats the test 100 times and calculates the average:

```
/**
 * Runs the test 100 times and gets the average
 *
 * @param {function} The function to be benchmarked
 */
function benchmarkArrayWithout(fn) {
  let results = [];
  let iteration = 0;

  while (++iteration <= 100) {
    const mainArr = Array.from(Array(1000).keys());
    const withoutArr = [...Array(1000).keys()].filter(value => Math.round(Math.random()) === 0);
    const start = Date.now();

    for (let i = 0; i < 10000; i++) {
      fn(mainArr, ...withoutArr);
    }

    const end = Date.now();
    results = [...results, end - start];
  }

  console.log('Average Time Elapsed %s seconds', results.reduce((a, b) => a + b, 0) / (results.length * 1000));
}

benchmarkArrayWithout(arrayWithout);
// Output: Average Time Elapsed 0.43989 seconds

benchmarkArrayWithout(_.without);
// Output: Average Time Elapsed 0.57155 seconds
```

# Run tests

`npm test`
