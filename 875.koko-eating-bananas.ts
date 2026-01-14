/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
export function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        const k = Math.floor((left + right) / 2);

        let hoursNeeded = 0;
        for (const p of piles) {
            hoursNeeded += Math.ceil(p / k);
        }

        if (hoursNeeded <= h) {
            result = k;
            right = k - 1;
        } else {
            left = k + 1;
        }
    }

    return result;
}
// @lc code=end
