/*
 * @lc app=leetcode id=494 lang=typescript
 *
 * [494] Target Sum
 */

// @lc code=start
export function findTargetSumWays(nums: number[], target: number): number {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    
    // If target is greater than sum or (sum + target) is odd, no solution
    if (Math.abs(target) > sum || (sum + target) % 2 !== 0) {
        return 0;
    }
    
    const subsetSum = (sum + target) / 2;
    
    // Now it's a subset sum problem
    const dp: number[] = new Array(subsetSum + 1).fill(0);
    dp[0] = 1; // One way to make sum 0 (empty subset)
    
    for (const num of nums) {
        for (let j = subsetSum; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }
    
    return dp[subsetSum];
}
// @lc code=end
