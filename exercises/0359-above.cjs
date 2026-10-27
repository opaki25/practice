// Exercise 0359: Filter numbers above a threshold (36).
// Predict each result before running: node exercises/0359-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 36);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      35,
      36,
      37
    ],
    [
      37
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      38,
      39
    ],
    [
      38,
      39
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0359: all cases passed');
}
