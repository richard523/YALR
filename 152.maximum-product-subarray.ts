/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
export function maxProduct(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        
        // When current number is negative, swapping max and min gives the right result
        if (num < 0) {
            [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
        }
        
        maxSoFar = Math.max(num, maxSoFar * num);
        minSoFar = Math.min(num, minSoFar * num);
        
        result = Math.max(result, maxSoFar);
    }
    
    return result;
}
// @lc code=end
