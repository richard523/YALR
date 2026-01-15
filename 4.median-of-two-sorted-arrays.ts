/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let A = nums1;
    let B = nums2;
    let m = A.length;
    let n = B.length;

    // Ensure A is the shorter array
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let low = 0;
    let high = m;
    let halfLen = Math.floor((m + n + 1) / 2);

    while (low <= high) {
        let i = Math.floor((low + high) / 2);
        let j = halfLen - i;

        let A_left = i === 0 ? -Infinity : A[i - 1];
        let A_right = i === m ? Infinity : A[i];
        let B_left = j === 0 ? -Infinity : B[j - 1];
        let B_right = j === n ? Infinity : B[j];

        if (A_left <= B_right && B_left <= A_right) {
            // Correct partition
            if ((m + n) % 2 === 1) {
                return Math.max(A_left, B_left);
            } else {
                return (Math.max(A_left, B_left) + Math.min(A_right, B_right)) / 2;
            }
        } else if (A_left > B_right) {
            // A's partition is too far right
            high = i - 1;
        } else {
            // A's partition is too far left
            low = i + 1;
        }
    }

    return 0.0;
}
// @lc code=end
