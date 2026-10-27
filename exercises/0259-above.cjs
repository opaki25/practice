// Exercise 0259: Filter numbers above a threshold (26).
// Predict each result before running: node exercises/0259-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 26);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      25,
      26,
      27
    ],
    [
      27
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      28,
      29
    ],
    [
      28,
      29
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0259: all cases passed');
}
