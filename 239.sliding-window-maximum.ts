/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
export function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    // deque will store indices
    const deque: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 2. Maintain monotonic decreasing order:
        // Remove elements from the back that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 3. Add current element's index
        deque.push(i);

        // 4. The front of the deque is the maximum of the current window
        // Start adding to results once we've reached the window size k
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
}
// @lc code=end
