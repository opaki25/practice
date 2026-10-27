// Exercise 0950: Map numbers to an offset (95).
// Predict each result before running: node exercises/0950-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 95);
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
      95,
      96
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -95,
      95
    ],
    [
      0,
      190
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0950: all cases passed');
}
