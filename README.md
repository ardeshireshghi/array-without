# array-without
Super quick arrayWithout (Excludes values from array)
# Install
`npm install array-without-fast`

# Usage
```
const arrayWithout = require('array-without-fast');

// ES6 import
import arrayWithout from 'array-without-fast';

const data = [1, 'foo', 10, 25, 'extra', 40, 11, 'apple'];
const filteredData = arrayWithout(data, [10, 'extra', 11]);

// Output
// [1, 'foo', 25, 40, 'apple']
```

# Run tests
`npm test`
