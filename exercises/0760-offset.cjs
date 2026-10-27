// Exercise 0760: Map numbers to an offset (76).
// Predict each result before running: node exercises/0760-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 76);
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
      76,
      77
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -76,
      76
    ],
    [
      0,
      152
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0760: all cases passed');
}
