// Exercise 0349: Filter numbers above a threshold (35).
// Predict each result before running: node exercises/0349-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 35);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      34,
      35,
      36
    ],
    [
      36
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      37,
      38
    ],
    [
      37,
      38
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0349: all cases passed');
}
