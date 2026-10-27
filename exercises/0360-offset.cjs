// Exercise 0360: Map numbers to an offset (36).
// Predict each result before running: node exercises/0360-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 36);
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
      36,
      37
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -36,
      36
    ],
    [
      0,
      72
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0360: all cases passed');
}
