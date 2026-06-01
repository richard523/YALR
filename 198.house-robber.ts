/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
export function rob(nums: number[]): number {
    let prev1 = 0; // dp[i-2]
    let prev2 = 0; // dp[i-1]
    
    for (const num of nums) {
        const temp = prev2;
        prev2 = Math.max(prev1 + num, prev2);
        prev1 = temp;
    }
    
    return prev2;
}
// @lc code=end
