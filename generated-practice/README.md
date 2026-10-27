# Generated arithmetic history

This directory records one million generated addition exercises, one file-changing commit per exercise. The inputs cover every ordered pair of integers from 0 through 999. These are repetitive practice records created with AI assistance, not one million independent software features.

`current-arithmetic.json` contains the exercise at the checked-out commit. Run `node generated-practice/check-current.cjs` from the repository root to validate it. To practice, calculate a + b before reading the expected answer.

Earlier records are preserved in Git history rather than as one million files. Browse `git log -- generated-practice/current-arithmetic.json`, then read a record with `git show <commit>:generated-practice/current-arithmetic.json`. The original 1,000 JavaScript drills remain under exercises/.
