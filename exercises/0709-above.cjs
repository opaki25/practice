// Exercise 0709: Filter numbers above a threshold (71).
// Predict each result before running: node exercises/0709-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 71);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      70,
      71,
      72
    ],
    [
      72
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      73,
      74
    ],
    [
      73,
      74
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0709: all cases passed');
}
