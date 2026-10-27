// Exercise 0010: Map numbers to an offset (1).
// Predict each result before running: node exercises/0010-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 1);
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
      1,
      2
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -1,
      1
    ],
    [
      0,
      2
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0010: all cases passed');
}
