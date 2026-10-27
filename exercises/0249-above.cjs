// Exercise 0249: Filter numbers above a threshold (25).
// Predict each result before running: node exercises/0249-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 25);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      24,
      25,
      26
    ],
    [
      26
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      27,
      28
    ],
    [
      27,
      28
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0249: all cases passed');
}
