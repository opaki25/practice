// Exercise 0240: Map numbers to an offset (24).
// Predict each result before running: node exercises/0240-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 24);
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
      24,
      25
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -24,
      24
    ],
    [
      0,
      48
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0240: all cases passed');
}
