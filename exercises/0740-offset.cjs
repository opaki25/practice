// Exercise 0740: Map numbers to an offset (74).
// Predict each result before running: node exercises/0740-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 74);
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
      74,
      75
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -74,
      74
    ],
    [
      0,
      148
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0740: all cases passed');
}
