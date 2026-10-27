// Exercise 0559: Filter numbers above a threshold (56).
// Predict each result before running: node exercises/0559-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 56);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      55,
      56,
      57
    ],
    [
      57
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      58,
      59
    ],
    [
      58,
      59
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0559: all cases passed');
}
