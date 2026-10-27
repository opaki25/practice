// Exercise 0199: Filter numbers above a threshold (20).
// Predict each result before running: node exercises/0199-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 20);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      19,
      20,
      21
    ],
    [
      21
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      22,
      23
    ],
    [
      22,
      23
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0199: all cases passed');
}
