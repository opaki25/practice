// Exercise 0870: Map numbers to an offset (87).
// Predict each result before running: node exercises/0870-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 87);
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
      87,
      88
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -87,
      87
    ],
    [
      0,
      174
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0870: all cases passed');
}
