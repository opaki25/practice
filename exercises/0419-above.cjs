// Exercise 0419: Filter numbers above a threshold (42).
// Predict each result before running: node exercises/0419-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 42);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      41,
      42,
      43
    ],
    [
      43
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      44,
      45
    ],
    [
      44,
      45
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0419: all cases passed');
}
