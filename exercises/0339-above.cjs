// Exercise 0339: Filter numbers above a threshold (34).
// Predict each result before running: node exercises/0339-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 34);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      33,
      34,
      35
    ],
    [
      35
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      36,
      37
    ],
    [
      36,
      37
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0339: all cases passed');
}
