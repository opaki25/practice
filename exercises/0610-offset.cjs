// Exercise 0610: Map numbers to an offset (61).
// Predict each result before running: node exercises/0610-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 61);
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
      61,
      62
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -61,
      61
    ],
    [
      0,
      122
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0610: all cases passed');
}
