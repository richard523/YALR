/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
export function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b); // Sort the array to use two-pointer approach and handle duplicates

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for nums[i]
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        const target = -nums[i];

        while (left < right) {
            const currentSum = nums[left] + nums[right];

            if (currentSum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values for nums[left]
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicate values for nums[right]
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (currentSum < target) {
                left++;
            } else { // currentSum > target
                right--;
            }
        }
    }

    return result;
};
// @lc code=end
