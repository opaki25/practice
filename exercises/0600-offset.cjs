// Exercise 0600: Map numbers to an offset (60).
// Predict each result before running: node exercises/0600-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 60);
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
      60,
      61
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -60,
      60
    ],
    [
      0,
      120
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0600: all cases passed');
}
