'use strict';
const assert = require('node:assert/strict');
const exercise = require('./current-arithmetic.json');
assert.equal(exercise.operation, 'add');
assert.ok(Number.isInteger(exercise.id) && exercise.id >= 1 && exercise.id <= 1000000);
assert.equal(exercise.a, Math.floor((exercise.id - 1) / 1000));
assert.equal(exercise.b, (exercise.id - 1) % 1000);
assert.equal(exercise.expected, exercise.a + exercise.b);
console.log('Exercise ' + exercise.id + ': ' + exercise.a + ' + ' + exercise.b + ' = ' + exercise.expected);
