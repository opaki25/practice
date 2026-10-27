// Exercise 0469: Filter numbers above a threshold (47).
// Predict each result before running: node exercises/0469-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 47);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      46,
      47,
      48
    ],
    [
      48
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      49,
      50
    ],
    [
      49,
      50
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0469: all cases passed');
}
