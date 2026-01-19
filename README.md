# YALR

yet another leetcode repo but in typescript

# if this is useful metric to anyone:
https://leetcode.com/u/richard523/

# .md shall be notes

# .ts shall be a leetcode submission. Compatible with the vscode leetcode plugin! (hopefully)

![](https://dl.dropboxusercontent.com/scl/fi/7r0goulrlbty7m6pfyaxb/Obsidian_UdObaxDzfp.png?rlkey=hh92xwhmnk4jybe30uuryv9tt&dl=0)

## Installation (bun preferred) https://bun.com/docs/installation

```bash
curl -fsSL https://bun.com/install | bash
```

## Running All Tests
```bash
bun test
```

## Counting Problems
You can count how many problems you have solved so far:
```bash
./count
```
This script identifies problems by looking for numbered files and files with corresponding `.test.ts` files.

## Running a Single Test
You can run an individual test file using the provided `test` script:
```bash
./test <basename>
```
Replace `<basename>` with the base name of the test file (without the `.test.ts` extension). For example:
```bash
./test 15.3sum
```
This will execute the corresponding test.

## Test Script Location
The `test` script is located at the project root and is executable.

## Run all tests at once:
```bash
bun test
```

## List problem count:
```
./count
```