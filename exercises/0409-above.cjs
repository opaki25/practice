// Exercise 0409: Filter numbers above a threshold (41).
// Predict each result before running: node exercises/0409-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 41);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      40,
      41,
      42
    ],
    [
      42
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      43,
      44
    ],
    [
      43,
      44
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0409: all cases passed');
}
