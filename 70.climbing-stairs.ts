/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
export function climbStairs(n: number): number {
    if (n <= 2) return n;
    
    let prev1 = 1; // Represents dp[i-1]
    let prev2 = 2; // Represents dp[i-2]
    let current = 0;
    
    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
}
// @lc code=end
