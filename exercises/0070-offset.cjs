// Exercise 0070: Map numbers to an offset (7).
// Predict each result before running: node exercises/0070-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 7);
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
      7,
      8
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -7,
      7
    ],
    [
      0,
      14
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0070: all cases passed');
}
