// Exercise 0539: Filter numbers above a threshold (54).
// Predict each result before running: node exercises/0539-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 54);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      53,
      54,
      55
    ],
    [
      55
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      56,
      57
    ],
    [
      56,
      57
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0539: all cases passed');
}
