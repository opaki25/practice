// Exercise 0939: Filter numbers above a threshold (94).
// Predict each result before running: node exercises/0939-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 94);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      93,
      94,
      95
    ],
    [
      95
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      96,
      97
    ],
    [
      96,
      97
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0939: all cases passed');
}
