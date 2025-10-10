// Runnable test runner for Encode and Decode Strings (LeetCode 271)
// Run with: node 271.encode-and-decode-strings.run.js

function encode(strs) {
  const parts = [];
  for (const s of strs) {
    parts.push(String(s.length) + '#' + s);
  }
  return parts.join('');
}

function decode(s) {
  const res = [];
  let i = 0;
  const n = s.length;
  while (i < n) {
    let j = i;
    while (j < n && s[j] !== '#') j++;
    if (j === n) break; // malformed
    const len = parseInt(s.slice(i, j), 10);
    j++;
    res.push(s.slice(j, j + len));
    i = j + len;
  }
  return res;
}

const cases = [
  ["neet", "code", "love", "you"],
  ["we", "say", ":", "yes"],
  ["", ""],
  ["#start", "middle#", "end"],
  []
];

let allOk = true;
for (const c of cases) {
  const e = encode(c);
  const d = decode(e);
  const ok = JSON.stringify(c) === JSON.stringify(d);
  console.log('IN:', c, '\nENC:', e, '\nDEC:', d, '\nOK:', ok, '\n---');
  if (!ok) allOk = false;
}

if (!allOk) process.exitCode = 1;
else console.log('All tests passed.');
