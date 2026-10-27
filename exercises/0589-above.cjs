// Exercise 0589: Filter numbers above a threshold (59).
// Predict each result before running: node exercises/0589-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 59);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      58,
      59,
      60
    ],
    [
      60
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      61,
      62
    ],
    [
      61,
      62
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0589: all cases passed');
}
