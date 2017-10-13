# array-without
[![codecov](https://codecov.io/gh/ardeshireshghi/array-without/branch/master/graph/badge.svg)](https://codecov.io/gh/ardeshireshghi/array-without)

Lightweight and fast `arrayWithout` which excludes values from array and creates a new copy. It is written with preformance in mind. 

Super quick arrayWithout (Excludes values from array)

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

# Run tests
`npm test`
