// Exercise 0700: Map numbers to an offset (70).
// Predict each result before running: node exercises/0700-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 70);
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
      70,
      71
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -70,
      70
    ],
    [
      0,
      140
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0700: all cases passed');
}
