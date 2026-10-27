// Exercise 0430: Map numbers to an offset (43).
// Predict each result before running: node exercises/0430-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 43);
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
      43,
      44
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -43,
      43
    ],
    [
      0,
      86
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0430: all cases passed');
}
