// Exercise 0340: Map numbers to an offset (34).
// Predict each result before running: node exercises/0340-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 34);
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
      34,
      35
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -34,
      34
    ],
    [
      0,
      68
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0340: all cases passed');
}
