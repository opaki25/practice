// Exercise 0100: Map numbers to an offset (10).
// Predict each result before running: node exercises/0100-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 10);
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
      10,
      11
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -10,
      10
    ],
    [
      0,
      20
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0100: all cases passed');
}
