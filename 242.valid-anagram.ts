/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const charCounts = new Array(26).fill(0); // For lowercase English letters 'a' through 'z'

    for (let i = 0; i < s.length; i++) {
        charCounts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCounts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let i = 0; i < 26; i++) {
        if (charCounts[i] !== 0) {
            return false;
        }
    }

    return true;
};
// @lc code=end
