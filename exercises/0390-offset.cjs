// Exercise 0390: Map numbers to an offset (39).
// Predict each result before running: node exercises/0390-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 39);
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
      39,
      40
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -39,
      39
    ],
    [
      0,
      78
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0390: all cases passed');
}
