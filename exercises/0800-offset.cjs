// Exercise 0800: Map numbers to an offset (80).
// Predict each result before running: node exercises/0800-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 80);
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
      80,
      81
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -80,
      80
    ],
    [
      0,
      160
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0800: all cases passed');
}
