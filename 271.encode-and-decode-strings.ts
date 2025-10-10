let currentProblem = `Encode and Decode Strings

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]

Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]

Constraints:

    0 <= strs.length < 100
    0 <= strs[i].length < 200
    strs[i] contains only UTF-8 characters.

`
/*
Encode and Decode Strings (LeetCode 271)

Design an algorithm to encode a list of strings to a single string. The encoded
string is then decoded back to the original list of strings.

Implement the two functions below. If this were a typical LeetCode problem,
place your solution in the "ADD CODE HERE" region.

Example:
  Input: ["leet","code"]
  Output should decode back to the same array.

Constraints:
  - 0 <= strs.length < 100
  - 0 <= strs[i].length < 200
  - strs[i] contains arbitrary UTF-8 characters
*/

// ---------------------- START (LeetCode-style) ----------------------
// You would normally only change code within the "ADD CODE HERE" block.

/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
    // ADD CODE HERE
    // Use length-prefixed encoding: "<len>#<str>"
    let parts: string[] = [];
    for (const s of strs) {
        parts.push(`${s.length}#${s}`);
    }
    return parts.join('');
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    // ADD CODE HERE 
    const res: string[] = [];
    let i = 0;
    const n = s.length;
    while (i < n) {
        // read length until '#'
        let j = i;
        while (j < n && s[j] !== '#') j++; // neat
        if (j === n) break; // malformed
        const len = parseInt(s.slice(i, j), 10);
        j++; // skip '#'
        res.push(s.slice(j, j + len));
        i = j + len;
    }
    return res;
}

// ----------------------- END (LeetCode-style) -----------------------

// Exports: keep CommonJS compatibility at runtime while avoiding TS global errors
const _g: any = globalThis as any;
if (typeof _g.module !== 'undefined' && typeof _g.module.exports !== 'undefined') {
    _g.module.exports = { encode, decode };
}

// Self-test when run directly with Node/ts-node
if (typeof _g.require !== 'undefined' && _g.require.main === _g.module) {
    const cases: string[][] = [
        ["neet", "code", "love", "you"],
        ["we", "say", ":", "yes"],
        ["", ""],
        ["#start", "middle#", "end"],
        []
    ];
    for (const c of cases) {
        const e = encode(c);
        const d = decode(e);
        console.log('IN:', c);
        console.log('ENC:', e);
        console.log('DEC:', d);
        console.log('OK:', JSON.stringify(c) === JSON.stringify(d));
        console.log('---');
    }
}