// Exercise 0006: Take the first items without mutation (1).
// Predict each result before running: node exercises/0006-take.cjs
'use strict';

function solve(value) {
  return value.slice(0, 1);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      1,
      2,
      3
    ],
    [
      1
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      0,
      1,
      2
    ],
    [
      0
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0006: all cases passed');
}
