// Exercise 0690: Map numbers to an offset (69).
// Predict each result before running: node exercises/0690-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 69);
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
      69,
      70
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -69,
      69
    ],
    [
      0,
      138
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0690: all cases passed');
}
