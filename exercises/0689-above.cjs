// Exercise 0689: Filter numbers above a threshold (69).
// Predict each result before running: node exercises/0689-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 69);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      68,
      69,
      70
    ],
    [
      70
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      71,
      72
    ],
    [
      71,
      72
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0689: all cases passed');
}
