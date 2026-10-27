// Exercise 0580: Map numbers to an offset (58).
// Predict each result before running: node exercises/0580-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 58);
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
      58,
      59
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -58,
      58
    ],
    [
      0,
      116
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0580: all cases passed');
}
