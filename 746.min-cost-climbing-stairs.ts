/*
 * @lc app=leetcode id=746 lang=typescript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
export function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    
    // dp[i] represents the minimum cost to reach step i
    const dp: number[] = new Array(n + 1).fill(0);
    
    // We can start from step 0 or step 1 without paying their cost initially
    dp[0] = 0;
    dp[1] = 0;
    
    for (let i = 2; i <= n; i++) {
        // To reach step i, we can come from step i-1 (paying cost[i-1]) or step i-2 (paying cost[i-2])
        dp[i] = Math.min(
            dp[i - 1] + cost[i - 1],
            dp[i - 2] + cost[i - 2]
        );
    }
    
    // We need to reach the top, which is either step n-1 or n
    return dp[n];
}
// @lc code=end
