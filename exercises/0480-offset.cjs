// Exercise 0480: Map numbers to an offset (48).
// Predict each result before running: node exercises/0480-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 48);
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
      48,
      49
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -48,
      48
    ],
    [
      0,
      96
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0480: all cases passed');
}
