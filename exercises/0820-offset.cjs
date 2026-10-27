// Exercise 0820: Map numbers to an offset (82).
// Predict each result before running: node exercises/0820-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 82);
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
      82,
      83
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -82,
      82
    ],
    [
      0,
      164
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0820: all cases passed');
}
