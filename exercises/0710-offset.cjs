// Exercise 0710: Map numbers to an offset (71).
// Predict each result before running: node exercises/0710-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 71);
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
      71,
      72
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -71,
      71
    ],
    [
      0,
      142
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0710: all cases passed');
}
