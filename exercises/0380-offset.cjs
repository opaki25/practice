// Exercise 0380: Map numbers to an offset (38).
// Predict each result before running: node exercises/0380-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 38);
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
      38,
      39
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -38,
      38
    ],
    [
      0,
      76
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0380: all cases passed');
}
