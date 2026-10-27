// Exercise 0529: Filter numbers above a threshold (53).
// Predict each result before running: node exercises/0529-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 53);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      52,
      53,
      54
    ],
    [
      54
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      55,
      56
    ],
    [
      55,
      56
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0529: all cases passed');
}
