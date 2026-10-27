// Exercise 0730: Map numbers to an offset (73).
// Predict each result before running: node exercises/0730-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 73);
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
      73,
      74
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -73,
      73
    ],
    [
      0,
      146
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0730: all cases passed');
}
