// Exercise 0570: Map numbers to an offset (57).
// Predict each result before running: node exercises/0570-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 57);
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
      57,
      58
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -57,
      57
    ],
    [
      0,
      114
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0570: all cases passed');
}
