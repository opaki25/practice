// Exercise 0849: Filter numbers above a threshold (85).
// Predict each result before running: node exercises/0849-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 85);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      84,
      85,
      86
    ],
    [
      86
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      87,
      88
    ],
    [
      87,
      88
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0849: all cases passed');
}
