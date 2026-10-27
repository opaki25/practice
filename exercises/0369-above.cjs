// Exercise 0369: Filter numbers above a threshold (37).
// Predict each result before running: node exercises/0369-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 37);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      36,
      37,
      38
    ],
    [
      38
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      39,
      40
    ],
    [
      39,
      40
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0369: all cases passed');
}
