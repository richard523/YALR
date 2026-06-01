/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
export function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    
    if (n % 2 === 0) {
        return myPow(x * x, Math.floor(n / 2));
    } else {
        return x * myPow(x * x, Math.floor(n / 2));
    }
}
// @lc code=end
