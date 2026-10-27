// Exercise 0670: Map numbers to an offset (67).
// Predict each result before running: node exercises/0670-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 67);
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
      67,
      68
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -67,
      67
    ],
    [
      0,
      134
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0670: all cases passed');
}
