/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
export function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    // If the array is not rotated (or rotated n times), return the first element
    if (nums[left] <= nums[right]) {
        return nums[left];
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is the minimum or mid+1 is the minimum
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }

        // Decide which half to look into
        if (nums[mid] > nums[left]) {
            // Min is in the right half
            left = mid + 1;
        } else {
            // Min is in the left half
            right = mid - 1;
        }
    }

    return -1;
}
// @lc code=end
