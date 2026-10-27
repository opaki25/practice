// Exercise 0420: Map numbers to an offset (42).
// Predict each result before running: node exercises/0420-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 42);
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
      42,
      43
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -42,
      42
    ],
    [
      0,
      84
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0420: all cases passed');
}
