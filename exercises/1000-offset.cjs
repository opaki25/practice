// Exercise 1000: Map numbers to an offset (100).
// Predict each result before running: node exercises/1000-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 100);
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
      100,
      101
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -100,
      100
    ],
    [
      0,
      200
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 1000: all cases passed');
}
