// Exercise 0629: Filter numbers above a threshold (63).
// Predict each result before running: node exercises/0629-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 63);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      62,
      63,
      64
    ],
    [
      64
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      65,
      66
    ],
    [
      65,
      66
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0629: all cases passed');
}
