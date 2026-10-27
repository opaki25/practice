// Exercise 0840: Map numbers to an offset (84).
// Predict each result before running: node exercises/0840-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 84);
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
      84,
      85
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -84,
      84
    ],
    [
      0,
      168
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0840: all cases passed');
}
