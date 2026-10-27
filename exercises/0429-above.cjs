// Exercise 0429: Filter numbers above a threshold (43).
// Predict each result before running: node exercises/0429-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 43);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      42,
      43,
      44
    ],
    [
      44
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      45,
      46
    ],
    [
      45,
      46
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0429: all cases passed');
}
