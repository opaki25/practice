// Exercise 0219: Filter numbers above a threshold (22).
// Predict each result before running: node exercises/0219-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 22);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      21,
      22,
      23
    ],
    [
      23
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      24,
      25
    ],
    [
      24,
      25
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0219: all cases passed');
}
