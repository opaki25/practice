// Exercise 0170: Map numbers to an offset (17).
// Predict each result before running: node exercises/0170-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 17);
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
      17,
      18
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -17,
      17
    ],
    [
      0,
      34
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0170: all cases passed');
}
