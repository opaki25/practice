// Exercise 0759: Filter numbers above a threshold (76).
// Predict each result before running: node exercises/0759-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 76);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      75,
      76,
      77
    ],
    [
      77
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      78,
      79
    ],
    [
      78,
      79
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0759: all cases passed');
}
