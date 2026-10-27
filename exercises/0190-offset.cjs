// Exercise 0190: Map numbers to an offset (19).
// Predict each result before running: node exercises/0190-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 19);
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
      19,
      20
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -19,
      19
    ],
    [
      0,
      38
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0190: all cases passed');
}
