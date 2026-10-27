// Exercise 0780: Map numbers to an offset (78).
// Predict each result before running: node exercises/0780-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 78);
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
      78,
      79
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -78,
      78
    ],
    [
      0,
      156
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0780: all cases passed');
}
