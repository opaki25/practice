// Exercise 0299: Filter numbers above a threshold (30).
// Predict each result before running: node exercises/0299-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 30);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      29,
      30,
      31
    ],
    [
      31
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      32,
      33
    ],
    [
      32,
      33
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0299: all cases passed');
}
