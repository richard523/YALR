/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
export function canJump(nums: number[]): boolean {
    let furthest = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > furthest) return false;
        furthest = Math.max(furthest, i + nums[i]);
        if (furthest >= nums.length - 1) return true;
    }
    
    return true;
}
// @lc code=end
