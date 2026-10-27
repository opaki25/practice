// Exercise 0200: Map numbers to an offset (20).
// Predict each result before running: node exercises/0200-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 20);
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
      20,
      21
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -20,
      20
    ],
    [
      0,
      40
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0200: all cases passed');
}
