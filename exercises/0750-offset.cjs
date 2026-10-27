// Exercise 0750: Map numbers to an offset (75).
// Predict each result before running: node exercises/0750-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 75);
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
      75,
      76
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -75,
      75
    ],
    [
      0,
      150
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0750: all cases passed');
}
