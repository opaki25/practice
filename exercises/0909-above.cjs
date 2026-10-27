// Exercise 0909: Filter numbers above a threshold (91).
// Predict each result before running: node exercises/0909-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 91);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      90,
      91,
      92
    ],
    [
      92
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      93,
      94
    ],
    [
      93,
      94
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0909: all cases passed');
}
