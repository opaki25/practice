// Exercise 0230: Map numbers to an offset (23).
// Predict each result before running: node exercises/0230-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 23);
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
      23,
      24
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -23,
      23
    ],
    [
      0,
      46
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0230: all cases passed');
}
