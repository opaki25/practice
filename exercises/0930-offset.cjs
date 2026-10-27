// Exercise 0930: Map numbers to an offset (93).
// Predict each result before running: node exercises/0930-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 93);
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
      93,
      94
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -93,
      93
    ],
    [
      0,
      186
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0930: all cases passed');
}
