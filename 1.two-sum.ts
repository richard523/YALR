/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
export function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>(); // Map to store number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i);
    }

    // As per problem statement, every input has exactly one pair of indices.
    // So, this line should theoretically not be reached.
    return [];
};
// @lc code=end
