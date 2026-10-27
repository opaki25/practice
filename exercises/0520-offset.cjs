// Exercise 0520: Map numbers to an offset (52).
// Predict each result before running: node exercises/0520-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 52);
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
      52,
      53
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -52,
      52
    ],
    [
      0,
      104
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0520: all cases passed');
}
