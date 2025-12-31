/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
export function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
};

// #Array #HashTable #Sorting
// #Set
// Time Complexity: O(n)
// Space Complexity: O(n)
// @lc code=end

