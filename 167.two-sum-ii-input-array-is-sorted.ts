/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
export function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            // Problem asks for 1-indexed result
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            left++;
        } else { // currentSum > target
            right--;
        }
    }

    // The problem guarantees exactly one valid solution, so this line should not be reached.
    return [];
};
// @lc code=end
