// Exercise 0310: Map numbers to an offset (31).
// Predict each result before running: node exercises/0310-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 31);
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
      31,
      32
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -31,
      31
    ],
    [
      0,
      62
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0310: all cases passed');
}
