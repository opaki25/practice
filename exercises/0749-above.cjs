// Exercise 0749: Filter numbers above a threshold (75).
// Predict each result before running: node exercises/0749-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 75);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      74,
      75,
      76
    ],
    [
      76
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      77,
      78
    ],
    [
      77,
      78
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0749: all cases passed');
}
