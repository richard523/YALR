/*

 * @lc app=leetcode id=42 lang=typescript

 *

 * [42] Trapping Rain Water

 */

// @lc code=start

export function trap(heights: number[]): number {
    if (heights.length === 0) return 0;

    let left = 0, right = heights.length - 1;

    let maxLeft = 0, maxRight = 0;

    let waterTrapped = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                waterTrapped += maxLeft - heights[left];
            }

            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                waterTrapped += maxRight - heights[right];
            }

            right--;
        }
    }

    return waterTrapped;
}

// @lc code=end
