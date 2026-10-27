// Exercise 0560: Map numbers to an offset (56).
// Predict each result before running: node exercises/0560-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 56);
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
      56,
      57
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -56,
      56
    ],
    [
      0,
      112
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0560: all cases passed');
}
