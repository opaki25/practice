// Exercise 0810: Map numbers to an offset (81).
// Predict each result before running: node exercises/0810-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 81);
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
      81,
      82
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -81,
      81
    ],
    [
      0,
      162
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0810: all cases passed');
}
