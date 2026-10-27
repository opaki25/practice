// Exercise 0830: Map numbers to an offset (83).
// Predict each result before running: node exercises/0830-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 83);
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
      83,
      84
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -83,
      83
    ],
    [
      0,
      166
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0830: all cases passed');
}
