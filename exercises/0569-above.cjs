// Exercise 0569: Filter numbers above a threshold (57).
// Predict each result before running: node exercises/0569-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 57);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      56,
      57,
      58
    ],
    [
      58
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      59,
      60
    ],
    [
      59,
      60
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0569: all cases passed');
}
