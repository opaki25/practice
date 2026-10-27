// Exercise 0440: Map numbers to an offset (44).
// Predict each result before running: node exercises/0440-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 44);
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
      44,
      45
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -44,
      44
    ],
    [
      0,
      88
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0440: all cases passed');
}
