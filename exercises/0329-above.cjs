// Exercise 0329: Filter numbers above a threshold (33).
// Predict each result before running: node exercises/0329-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 33);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      32,
      33,
      34
    ],
    [
      34
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      35,
      36
    ],
    [
      35,
      36
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0329: all cases passed');
}
