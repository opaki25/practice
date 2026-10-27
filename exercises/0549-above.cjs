// Exercise 0549: Filter numbers above a threshold (55).
// Predict each result before running: node exercises/0549-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 55);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      54,
      55,
      56
    ],
    [
      56
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      57,
      58
    ],
    [
      57,
      58
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0549: all cases passed');
}
