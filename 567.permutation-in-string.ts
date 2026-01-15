/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
export function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - aCode]++;
        s2Count[s2.charCodeAt(i) - aCode]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) matches++;
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches === 26) return true;

        const rightIdx = s2.charCodeAt(i + s1.length) - aCode;
        s2Count[rightIdx]++;
        if (s1Count[rightIdx] === s2Count[rightIdx]) {
            matches++;
        } else if (s1Count[rightIdx] === s2Count[rightIdx] - 1) {
            matches--;
        }

        const leftIdx = s2.charCodeAt(i) - aCode;
        s2Count[leftIdx]--;
        if (s1Count[leftIdx] === s2Count[leftIdx]) {
            matches++;
        } else if (s1Count[leftIdx] === s2Count[leftIdx] + 1) {
            matches--;
        }
    }

    return matches === 26;
}
// @lc code=end
