// Exercise 0919: Filter numbers above a threshold (92).
// Predict each result before running: node exercises/0919-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 92);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      91,
      92,
      93
    ],
    [
      93
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      94,
      95
    ],
    [
      94,
      95
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0919: all cases passed');
}
