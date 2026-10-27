// Exercise 0579: Filter numbers above a threshold (58).
// Predict each result before running: node exercises/0579-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 58);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      57,
      58,
      59
    ],
    [
      59
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      60,
      61
    ],
    [
      60,
      61
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0579: all cases passed');
}
