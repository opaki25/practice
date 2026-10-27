// Exercise 0379: Filter numbers above a threshold (38).
// Predict each result before running: node exercises/0379-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 38);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      37,
      38,
      39
    ],
    [
      39
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      40,
      41
    ],
    [
      40,
      41
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0379: all cases passed');
}
