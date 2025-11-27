/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
export function groupAnagrams(strs: string[]): string[][] {
    const anagramMap = new Map<string, string[]>();

    for (const str of strs) {
        const charCounts = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            charCounts[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        // Create a unique key from the character counts
        // e.g., "1#0#0#1#..." for "ab"
        const key = charCounts.join('#');

        if (anagramMap.has(key)) {
            anagramMap.get(key)!.push(str);
        } else {
            anagramMap.set(key, [str]);
        }
    }

    return Array.from(anagramMap.values());
};
// @lc code=end