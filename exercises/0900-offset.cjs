// Exercise 0900: Map numbers to an offset (90).
// Predict each result before running: node exercises/0900-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 90);
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
      90,
      91
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -90,
      90
    ],
    [
      0,
      180
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0900: all cases passed');
}
