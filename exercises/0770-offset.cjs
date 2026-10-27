// Exercise 0770: Map numbers to an offset (77).
// Predict each result before running: node exercises/0770-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 77);
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
      77,
      78
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -77,
      77
    ],
    [
      0,
      154
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0770: all cases passed');
}
