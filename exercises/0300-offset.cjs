// Exercise 0300: Map numbers to an offset (30).
// Predict each result before running: node exercises/0300-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 30);
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
      30,
      31
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -30,
      30
    ],
    [
      0,
      60
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0300: all cases passed');
}
