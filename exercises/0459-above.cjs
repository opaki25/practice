// Exercise 0459: Filter numbers above a threshold (46).
// Predict each result before running: node exercises/0459-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 46);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      45,
      46,
      47
    ],
    [
      47
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      48,
      49
    ],
    [
      48,
      49
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0459: all cases passed');
}
