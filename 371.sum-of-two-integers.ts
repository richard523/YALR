/*
 * @lc app=leetcode id=371 lang=typescript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
export function getSum(a: number, b: number): number {
    while (b !== 0) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
// @lc code=end
