import { topKFrequent } from './347.top-k-frequent-elements';

describe('topKFrequent', () => {
    it('should return the k most frequent elements for example 1', () => {
        const nums = [1, 2, 2, 3, 3, 3];
        const k = 2;
        const result = topKFrequent(nums, k);
        // The order doesn't matter, so we sort for comparison
        expect(result.sort()).toEqual([2, 3].sort());
    });

    it('should return the k most frequent elements for example 2', () => {
        const nums = [7, 7];
        const k = 1;
        const result = topKFrequent(nums, k);
        expect(result.sort()).toEqual([7].sort());
    });

    it('should handle a larger array with various frequencies', () => {
        const nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4];
        const k = 2;
        const result = topKFrequent(nums, k);
        expect(result.sort()).toEqual([1, 4].sort());
    });

    it('should handle all elements having the same frequency', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 3;
        const result = topKFrequent(nums, k);
        // Any 3 elements are valid, so we check if the result contains 3 unique elements
        expect(result.length).toBe(3);
        expect(new Set(result).size).toBe(3);
        // Since the problem states "answer is always unique", this case implies k <= number of distinct elements.
        // And if all have same frequency, any k distinct elements are valid.
    });

    it('should handle k equal to the number of distinct elements', () => {
        const nums = [1, 2, 3];
        const k = 3;
        const result = topKFrequent(nums, k);
        expect(result.sort()).toEqual([1, 2, 3].sort());
    });

    it('should handle negative numbers', () => {
        const nums = [-1, -1, -2, -2, -2];
        const k = 2;
        const result = topKFrequent(nums, k);
        expect(result.sort()).toEqual([-1, -2].sort());
    });

    it('should handle single element array', () => {
        const nums = [1];
        const k = 1;
        const result = topKFrequent(nums, k);
        expect(result.sort()).toEqual([1].sort());
    });

    it('should handle cases where multiple numbers have the same frequency at the k-th spot', () => {
        const nums = [1, 1, 2, 2, 3, 3, 4];
        const k = 2;
        const result = topKFrequent(nums, k);
        // Here, 1, 2, 3 all have frequency 2. The problem states "answer is always unique".
        // This implies that for a given k, there's a clear set of k most frequent elements.
        // If there's a tie for the k-th spot, the problem statement implies the test cases won't have such ambiguity.
        // For this specific input, if k=2, any two of [1,2,3] would be valid.
        // Let's assume the problem implies that the top k elements will have strictly higher frequency than the (k+1)th.
        // Or, if there's a tie, the specific elements chosen don't matter as long as they are among the most frequent.
        // Given the current implementation, it will pick elements based on their order in the buckets.
        // For this test, let's just check if the result has the correct count and contains elements from the top frequencies.
        expect(result.length).toBe(k);
        // In this case, 1, 2, 3 all have frequency 2. 4 has frequency 1.
        // So, the top 2 frequent elements must be any two from [1, 2, 3].
        const possibleTopElements = new Set([1, 2, 3]);
        expect(possibleTopElements.has(result[0])).toBe(true);
        expect(possibleTopElements.has(result[1])).toBe(true);
        expect(result[0]).not.toBe(result[1]);
    });
});
