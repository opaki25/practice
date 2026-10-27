// Exercise 0120: Map numbers to an offset (12).
// Predict each result before running: node exercises/0120-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 12);
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
      12,
      13
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -12,
      12
    ],
    [
      0,
      24
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0120: all cases passed');
}
