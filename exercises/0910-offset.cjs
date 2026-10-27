// Exercise 0910: Map numbers to an offset (91).
// Predict each result before running: node exercises/0910-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 91);
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
      91,
      92
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -91,
      91
    ],
    [
      0,
      182
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0910: all cases passed');
}
