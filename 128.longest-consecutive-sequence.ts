/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
export function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set<number>(nums);
    let maxLength = 0;

    for (const num of nums) {
        // Check if the current number is the start of a sequence
        // A number is the start of a sequence if num - 1 is NOT in the set
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
// @lc code=end
