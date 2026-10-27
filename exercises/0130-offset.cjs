// Exercise 0130: Map numbers to an offset (13).
// Predict each result before running: node exercises/0130-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 13);
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
      13,
      14
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -13,
      13
    ],
    [
      0,
      26
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0130: all cases passed');
}
