// Exercise 0280: Map numbers to an offset (28).
// Predict each result before running: node exercises/0280-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 28);
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
      28,
      29
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -28,
      28
    ],
    [
      0,
      56
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0280: all cases passed');
}
