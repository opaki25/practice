// Exercise 0719: Filter numbers above a threshold (72).
// Predict each result before running: node exercises/0719-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 72);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      71,
      72,
      73
    ],
    [
      73
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      74,
      75
    ],
    [
      74,
      75
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0719: all cases passed');
}
