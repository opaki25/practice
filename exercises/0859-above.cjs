// Exercise 0859: Filter numbers above a threshold (86).
// Predict each result before running: node exercises/0859-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 86);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      85,
      86,
      87
    ],
    [
      87
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      88,
      89
    ],
    [
      88,
      89
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0859: all cases passed');
}
