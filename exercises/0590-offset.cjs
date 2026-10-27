// Exercise 0590: Map numbers to an offset (59).
// Predict each result before running: node exercises/0590-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 59);
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
      59,
      60
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -59,
      59
    ],
    [
      0,
      118
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0590: all cases passed');
}
