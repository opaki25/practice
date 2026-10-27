// Exercise 0460: Map numbers to an offset (46).
// Predict each result before running: node exercises/0460-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 46);
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
      46,
      47
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -46,
      46
    ],
    [
      0,
      92
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0460: all cases passed');
}
