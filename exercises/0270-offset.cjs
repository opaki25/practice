// Exercise 0270: Map numbers to an offset (27).
// Predict each result before running: node exercises/0270-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 27);
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
      27,
      28
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -27,
      27
    ],
    [
      0,
      54
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0270: all cases passed');
}
