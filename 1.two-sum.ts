/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start #
function twoSum(nums: number[], target: number): number[] {
   const map = new Map<number, number>();
   for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
         return [map.get(complement)!, i];
      }
      map.set(nums[i], i);
   }
   console.log(map);
   return [];
};
// #Map #HashTable #one-pass
// Time Complexity: O(n)
// Space Complexity: O(n)
// @lc code=end