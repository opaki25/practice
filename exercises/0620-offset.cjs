// Exercise 0620: Map numbers to an offset (62).
// Predict each result before running: node exercises/0620-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 62);
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
      62,
      63
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -62,
      62
    ],
    [
      0,
      124
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0620: all cases passed');
}
