/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
export function numDecodings(s: string): number {
    if (s.length === 0) return 0;
    
    const dp: number[] = new Array(s.length + 1).fill(0);
    dp[0] = 1; // Empty string has 1 way
    dp[1] = s[0] === '0' ? 0 : 1;
    
    for (let i = 2; i <= s.length; i++) {
        const oneDigit = parseInt(s[i - 1]);
        const twoDigits = parseInt(s[i - 2] + s[i - 1]);
        
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[s.length];
}
// @lc code=end
