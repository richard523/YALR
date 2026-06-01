/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
export function reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        // Check if the i-th bit from the right is set in n
        const bit = (n >> i) & 1;
        // Place this bit at position (31 - i) in the result
        result |= (bit << (31 - i));
    }
    return result >>> 0; // Ensure unsigned
}
// @lc code=end
