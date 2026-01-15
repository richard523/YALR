/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
export function largestRectangleArea(heights: number[]): number {
    let maxArea = 0;
    const stack: { index: number; height: number }[] = []; // Stores {index, height}

    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
            const { index, height } = stack.pop()!;
            maxArea = Math.max(maxArea, height * (i - index));
            start = index;
        }
        stack.push({ index: start, height: heights[i] });
    }

    // Process remaining bars in stack
    for (const { index, height } of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
}
// @lc code=end
