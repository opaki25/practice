// Exercise 0269: Filter numbers above a threshold (27).
// Predict each result before running: node exercises/0269-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 27);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      26,
      27,
      28
    ],
    [
      28
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      29,
      30
    ],
    [
      29,
      30
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0269: all cases passed');
}
