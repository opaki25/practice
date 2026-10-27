// Exercise 0110: Map numbers to an offset (11).
// Predict each result before running: node exercises/0110-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 11);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      0,
      1
    ],
    [
      11,
      12
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -11,
      11
    ],
    [
      0,
      22
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0110: all cases passed');
}
