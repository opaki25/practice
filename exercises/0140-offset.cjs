// Exercise 0140: Map numbers to an offset (14).
// Predict each result before running: node exercises/0140-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 14);
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
      14,
      15
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -14,
      14
    ],
    [
      0,
      28
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0140: all cases passed');
}
