'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const exercises = fs.readdirSync(path.join(root, 'exercises'))
  .filter(name => name.endsWith('.cjs'))
  .sort()
  .map(name => path.join('exercises', name));

if (exercises.length === 0) {
  console.error('No exercise files were found.');
  process.exit(1);
}

exercises.push(path.join('generated-practice', 'check-current.cjs'));
let passed = 0;
for (const file of exercises) {
  const result = spawnSync(process.execPath, [file], {
    cwd: root,
    encoding: 'utf8',
    timeout: 10000,
  });
  if (result.error || result.status !== 0) {
    console.error(`FAILED: ${file}`);
    console.error(result.error?.message || result.stderr || result.stdout);
    process.exit(1);
  }
  passed++;
  if (passed % 100 === 0) console.log(`Passed ${passed}/${exercises.length}`);
}
console.log(`All ${passed} exercise checks passed.`);
