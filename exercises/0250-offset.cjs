// Exercise 0250: Map numbers to an offset (25).
// Predict each result before running: node exercises/0250-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 25);
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
      25,
      26
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -25,
      25
    ],
    [
      0,
      50
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0250: all cases passed');
}
