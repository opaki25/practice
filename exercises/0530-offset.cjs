// Exercise 0530: Map numbers to an offset (53).
// Predict each result before running: node exercises/0530-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 53);
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
      53,
      54
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -53,
      53
    ],
    [
      0,
      106
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0530: all cases passed');
}
