// Exercise 0990: Map numbers to an offset (99).
// Predict each result before running: node exercises/0990-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 99);
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
      99,
      100
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -99,
      99
    ],
    [
      0,
      198
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0990: all cases passed');
}
