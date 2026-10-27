// Exercise 0479: Filter numbers above a threshold (48).
// Predict each result before running: node exercises/0479-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 48);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      47,
      48,
      49
    ],
    [
      49
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      50,
      51
    ],
    [
      50,
      51
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0479: all cases passed');
}
