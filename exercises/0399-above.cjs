// Exercise 0399: Filter numbers above a threshold (40).
// Predict each result before running: node exercises/0399-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 40);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      39,
      40,
      41
    ],
    [
      41
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      42,
      43
    ],
    [
      42,
      43
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0399: all cases passed');
}
