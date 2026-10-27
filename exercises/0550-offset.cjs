// Exercise 0550: Map numbers to an offset (55).
// Predict each result before running: node exercises/0550-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 55);
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
      55,
      56
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -55,
      55
    ],
    [
      0,
      110
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0550: all cases passed');
}
