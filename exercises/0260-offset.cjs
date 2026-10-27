// Exercise 0260: Map numbers to an offset (26).
// Predict each result before running: node exercises/0260-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 26);
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
      26,
      27
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -26,
      26
    ],
    [
      0,
      52
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0260: all cases passed');
}
