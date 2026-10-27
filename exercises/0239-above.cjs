// Exercise 0239: Filter numbers above a threshold (24).
// Predict each result before running: node exercises/0239-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 24);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      23,
      24,
      25
    ],
    [
      25
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      26,
      27
    ],
    [
      26,
      27
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0239: all cases passed');
}
