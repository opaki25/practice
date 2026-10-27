// Exercise 0660: Map numbers to an offset (66).
// Predict each result before running: node exercises/0660-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 66);
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
      66,
      67
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -66,
      66
    ],
    [
      0,
      132
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0660: all cases passed');
}
