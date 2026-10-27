// Exercise 0739: Filter numbers above a threshold (74).
// Predict each result before running: node exercises/0739-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 74);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      73,
      74,
      75
    ],
    [
      75
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      76,
      77
    ],
    [
      76,
      77
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0739: all cases passed');
}
