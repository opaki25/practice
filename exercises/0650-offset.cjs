// Exercise 0650: Map numbers to an offset (65).
// Predict each result before running: node exercises/0650-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 65);
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
      65,
      66
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -65,
      65
    ],
    [
      0,
      130
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0650: all cases passed');
}
