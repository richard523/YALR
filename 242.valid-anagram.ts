/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const count: Record<string, number> = {};
    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1;
    }   
    return Object.values(count).every(v => v === 0);
};
// #HashTable #String #Sorting
// #Object.values(...).every(...);
// Time Complexity: O(n)
// Space Complexity: O(1)

// @lc code=end