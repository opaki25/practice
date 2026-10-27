// Exercise 0159: Filter numbers above a threshold (16).
// Predict each result before running: node exercises/0159-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 16);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      15,
      16,
      17
    ],
    [
      17
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      18,
      19
    ],
    [
      18,
      19
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0159: all cases passed');
}
