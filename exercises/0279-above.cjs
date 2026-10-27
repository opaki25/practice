// Exercise 0279: Filter numbers above a threshold (28).
// Predict each result before running: node exercises/0279-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 28);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      27,
      28,
      29
    ],
    [
      29
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      30,
      31
    ],
    [
      30,
      31
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0279: all cases passed');
}
