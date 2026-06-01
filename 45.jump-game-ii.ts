/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
export function jump(nums: number[]): number {
    let jumps = 0;
    let currentEnd = 0;
    let furthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        furthest = Math.max(furthest, i + nums[i]);
        
        if (i === currentEnd) {
            jumps++;
            currentEnd = furthest;
        }
    }
    
    return jumps;
}
// @lc code=end
