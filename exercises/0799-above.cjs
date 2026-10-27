// Exercise 0799: Filter numbers above a threshold (80).
// Predict each result before running: node exercises/0799-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 80);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      79,
      80,
      81
    ],
    [
      81
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      82,
      83
    ],
    [
      82,
      83
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0799: all cases passed');
}
