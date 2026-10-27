// Exercise 0890: Map numbers to an offset (89).
// Predict each result before running: node exercises/0890-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 89);
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
      89,
      90
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -89,
      89
    ],
    [
      0,
      178
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0890: all cases passed');
}
