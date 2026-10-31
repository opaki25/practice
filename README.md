# JavaScript Practice Collection

1,000 small, generated practice exercises: ten operation families with 100 parameter variations each. Created with AI assistance, with one exercise per commit. These are repetitive drills, not 1,000 distinct concepts.

Open index.html to browse. Run any exercise with Node.js, for example `node exercises/0001-add.cjs`. Each includes three input/output checks and verifies that inputs remain unchanged. No dependencies are required.

Topics: addition, multiplication, thresholds, clamping, divisibility, array slicing, string suffixes, powers, filtering, and mapping. Inputs are finite numbers, strings, or arrays as shown in the examples; these are learning examples, not production validation utilities.

## Run the checks

Install Node.js with npm, then run this from the repository folder:

```sh
npm test
```

No package installation is needed. This runs each of the 1,000 JavaScript drills and the current arithmetic record check in a separate process. It stops with a nonzero exit code and the failing filename if a check fails or takes longer than ten seconds. Running the complete collection can take several minutes.

For a single drill, use `node exercises/0001-add.cjs`.

## Arithmetic exercises in Git history

The `generated-practice/` directory contains an additional collection of one million generated addition records, covering every ordered pair of integers from 0 through 999. Each commit updates `current-arithmetic.json`; the working folder contains only the latest record. These are repetitive practice data, not one million independent features.

Validate the current record:

```sh
node generated-practice/check-current.cjs
```

To explore earlier records without changing your checkout, list recent exercise commits:

```sh
git log -10 --oneline -- generated-practice/current-arithmetic.json
```

Then replace `COMMIT_SHA` below with one of the listed commit hashes:

```sh
git show COMMIT_SHA:generated-practice/current-arithmetic.json
```

For more details, see [the arithmetic collection guide](generated-practice/README.md).
