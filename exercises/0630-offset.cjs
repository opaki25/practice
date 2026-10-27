// Exercise 0630: Map numbers to an offset (63).
// Predict each result before running: node exercises/0630-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 63);
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
      63,
      64
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -63,
      63
    ],
    [
      0,
      126
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0630: all cases passed');
}
