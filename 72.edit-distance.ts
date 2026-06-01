/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */

// @lc code=start
export function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;
    const dp: number[][] = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
    
    // Initialize base cases
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // Delete all characters from word1
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // Insert all characters into word1
    }
    
    // Fill the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // Characters match, no operation needed
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // Delete from word1
                    dp[i][j - 1],     // Insert into word1
                    dp[i - 1][j - 1]  // Replace in word1
                );
            }
        }
    }
    
    return dp[m][n];
}
// @lc code=end
