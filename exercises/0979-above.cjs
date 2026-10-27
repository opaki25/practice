// Exercise 0979: Filter numbers above a threshold (98).
// Predict each result before running: node exercises/0979-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 98);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      97,
      98,
      99
    ],
    [
      99
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      100,
      101
    ],
    [
      100,
      101
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0979: all cases passed');
}
