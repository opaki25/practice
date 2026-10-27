// Exercise 0790: Map numbers to an offset (79).
// Predict each result before running: node exercises/0790-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 79);
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
      79,
      80
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -79,
      79
    ],
    [
      0,
      158
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0790: all cases passed');
}
