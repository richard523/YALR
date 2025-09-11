/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start #
function twoSum(nums: number[], target: number): number[] {
   const map = new Map<number, number>();
   for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num === undefined) continue;
      const complement = target - num;
      if (map.has(complement)) {
         const idx = map.get(complement);
         if (idx !== undefined) {
            return [idx, i];
         }
      }
      map.set(num, i);
   }
   console.log(map);
   return [];
};
// #Map #HashTable #one-pass
// Time Complexity: O(n)
// Space Complexity: O(n)
// @lc code=end