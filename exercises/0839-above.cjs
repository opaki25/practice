// Exercise 0839: Filter numbers above a threshold (84).
// Predict each result before running: node exercises/0839-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 84);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      83,
      84,
      85
    ],
    [
      85
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      86,
      87
    ],
    [
      86,
      87
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0839: all cases passed');
}
