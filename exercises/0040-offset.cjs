// Exercise 0040: Map numbers to an offset (4).
// Predict each result before running: node exercises/0040-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 4);
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
      4,
      5
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -4,
      4
    ],
    [
      0,
      8
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0040: all cases passed');
}
