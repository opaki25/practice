// Exercise 0210: Map numbers to an offset (21).
// Predict each result before running: node exercises/0210-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 21);
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
      21,
      22
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -21,
      21
    ],
    [
      0,
      42
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0210: all cases passed');
}
