// Exercise 0400: Map numbers to an offset (40).
// Predict each result before running: node exercises/0400-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 40);
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
      40,
      41
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -40,
      40
    ],
    [
      0,
      80
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0400: all cases passed');
}
