/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
export function topKFrequent(nums: number[], k: number): number[] {
    // Step 1: Count the frequency of each number
    const frequencyMap = new Map<number, number>();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Create buckets based on frequency
    // The index of the array represents the frequency, and the value is a list of numbers with that frequency.
    // The maximum possible frequency is nums.length.
    const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

    for (const [num, freq] of frequencyMap.entries()) {
        buckets[freq].push(num);
    }

    // Step 3: Collect the top k frequent elements
    const result: number[] = [];
    // Iterate from the highest possible frequency down to 1
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }

    // The problem states that the answer is always unique and we can return in any order.
    // If result.length exceeds k due to multiple numbers having the same frequency at the k-th spot,
    // we need to slice it to exactly k elements.
    return result.slice(0, k);
};
// @lc code=end