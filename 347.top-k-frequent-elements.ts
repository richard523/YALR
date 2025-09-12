/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    nums.sort((a, b) => a - b); // O(n log n) sort
    let map = new Map<number, number>(); // num -> frequency
    for (let i = 0; i < nums.length; i++) { // O(n)
        if (map.has(nums[i]!)) {
            map.set(nums[i]!, map.get(nums[i]!)! + 1);
        } else {
            map.set(nums[i]!, 1);
        }
    }
    let freqArray: [number, number][] = Array.from(map.entries());
    freqArray.sort((a, b) => b[1] - a[1]); // O(n log n) sort by frequency
    let result: number[] = [];
    for (let i = 0; i < k; i++) { // O(k)
        result.push(freqArray[i]![0]);
    }
    return result;
};
// @lc code=end

