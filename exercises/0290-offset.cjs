// Exercise 0290: Map numbers to an offset (29).
// Predict each result before running: node exercises/0290-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 29);
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
      29,
      30
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -29,
      29
    ],
    [
      0,
      58
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0290: all cases passed');
}
