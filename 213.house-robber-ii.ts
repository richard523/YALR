/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start
export function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    // The solution is to rob either the first house or the last house
    // and solve the problem as House Robber I for the remaining houses
    return Math.max(
        robHelper(nums.slice(0, nums.length - 1)),
        robHelper(nums.slice(1))
    );
}

function robHelper(nums: number[]): number {
    let prev1 = 0;
    let prev2 = 0;
    
    for (const num of nums) {
        const temp = prev2;
        prev2 = Math.max(prev1 + num, prev2);
        prev1 = temp;
    }
    
    return prev2;
}
// @lc code=end
