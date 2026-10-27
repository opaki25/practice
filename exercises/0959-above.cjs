// Exercise 0959: Filter numbers above a threshold (96).
// Predict each result before running: node exercises/0959-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 96);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      95,
      96,
      97
    ],
    [
      97
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      98,
      99
    ],
    [
      98,
      99
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0959: all cases passed');
}
