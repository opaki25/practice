// Exercise 0640: Map numbers to an offset (64).
// Predict each result before running: node exercises/0640-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 64);
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
      64,
      65
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -64,
      64
    ],
    [
      0,
      128
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0640: all cases passed');
}
