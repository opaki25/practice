// Exercise 0680: Map numbers to an offset (68).
// Predict each result before running: node exercises/0680-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 68);
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
      68,
      69
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -68,
      68
    ],
    [
      0,
      136
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0680: all cases passed');
}
