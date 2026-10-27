// Exercise 0489: Filter numbers above a threshold (49).
// Predict each result before running: node exercises/0489-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 49);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      48,
      49,
      50
    ],
    [
      50
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      51,
      52
    ],
    [
      51,
      52
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0489: all cases passed');
}
