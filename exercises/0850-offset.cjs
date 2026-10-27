// Exercise 0850: Map numbers to an offset (85).
// Predict each result before running: node exercises/0850-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 85);
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
      85,
      86
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -85,
      85
    ],
    [
      0,
      170
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0850: all cases passed');
}
