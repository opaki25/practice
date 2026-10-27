// Exercise 0330: Map numbers to an offset (33).
// Predict each result before running: node exercises/0330-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 33);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      0,
      1
    ],
    [
      33,
      34
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -33,
      33
    ],
    [
      0,
      66
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0330: all cases passed');
}
