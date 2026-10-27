// Exercise 0889: Filter numbers above a threshold (89).
// Predict each result before running: node exercises/0889-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 89);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      88,
      89,
      90
    ],
    [
      90
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      91,
      92
    ],
    [
      91,
      92
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0889: all cases passed');
}
