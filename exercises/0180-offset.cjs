// Exercise 0180: Map numbers to an offset (18).
// Predict each result before running: node exercises/0180-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 18);
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
      18,
      19
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -18,
      18
    ],
    [
      0,
      36
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0180: all cases passed');
}
