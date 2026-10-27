// Exercise 0320: Map numbers to an offset (32).
// Predict each result before running: node exercises/0320-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 32);
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
      32,
      33
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -32,
      32
    ],
    [
      0,
      64
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0320: all cases passed');
}
