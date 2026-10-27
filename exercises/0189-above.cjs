// Exercise 0189: Filter numbers above a threshold (19).
// Predict each result before running: node exercises/0189-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 19);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      18,
      19,
      20
    ],
    [
      20
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      21,
      22
    ],
    [
      21,
      22
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0189: all cases passed');
}
