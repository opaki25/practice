// Exercise 0989: Filter numbers above a threshold (99).
// Predict each result before running: node exercises/0989-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 99);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      98,
      99,
      100
    ],
    [
      100
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      101,
      102
    ],
    [
      101,
      102
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0989: all cases passed');
}
