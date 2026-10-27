// Exercise 0229: Filter numbers above a threshold (23).
// Predict each result before running: node exercises/0229-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 23);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      22,
      23,
      24
    ],
    [
      24
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      25,
      26
    ],
    [
      25,
      26
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0229: all cases passed');
}
