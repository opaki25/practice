// Exercise 0540: Map numbers to an offset (54).
// Predict each result before running: node exercises/0540-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 54);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      0,
      1
    ],
    [
      54,
      55
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -54,
      54
    ],
    [
      0,
      108
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0540: all cases passed');
}
