// Exercise 0729: Filter numbers above a threshold (73).
// Predict each result before running: node exercises/0729-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 73);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      72,
      73,
      74
    ],
    [
      74
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      75,
      76
    ],
    [
      75,
      76
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0729: all cases passed');
}
