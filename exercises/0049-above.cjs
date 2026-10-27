// Exercise 0049: Filter numbers above a threshold (5).
// Predict each result before running: node exercises/0049-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 5);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      4,
      5,
      6
    ],
    [
      6
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      7,
      8
    ],
    [
      7,
      8
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0049: all cases passed');
}
