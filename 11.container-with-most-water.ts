/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
export function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const currentWidth = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentWater = currentWidth * currentHeight;

        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer that points to the shorter bar
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
// @lc code=end
