/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
export function countSubstrings(s: string): number {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Count odd length palindromes
        count += expandAroundCenter(s, i, i);
        // Count even length palindromes
        count += expandAroundCenter(s, i, i + 1);
    }
    
    return count;
}

function expandAroundCenter(s: string, left: number, right: number): number {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
}
// @lc code=end
