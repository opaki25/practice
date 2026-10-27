// Exercise 0090: Map numbers to an offset (9).
// Predict each result before running: node exercises/0090-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 9);
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
      9,
      10
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -9,
      9
    ],
    [
      0,
      18
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0090: all cases passed');
}
