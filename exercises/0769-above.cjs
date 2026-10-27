// Exercise 0769: Filter numbers above a threshold (77).
// Predict each result before running: node exercises/0769-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 77);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      76,
      77,
      78
    ],
    [
      78
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      79,
      80
    ],
    [
      79,
      80
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0769: all cases passed');
}
