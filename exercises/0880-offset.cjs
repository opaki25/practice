// Exercise 0880: Map numbers to an offset (88).
// Predict each result before running: node exercises/0880-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 88);
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
      88,
      89
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -88,
      88
    ],
    [
      0,
      176
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0880: all cases passed');
}
