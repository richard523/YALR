import { longestConsecutive } from './128.longest-consecutive-sequence';

describe('longestConsecutive', () => {
    it('should return the correct length for example 1', () => {
        const nums = [2, 20, 4, 10, 3, 4, 5];
        expect(longestConsecutive(nums)).toBe(4); // Sequence: [2, 3, 4, 5]
    });

    it('should return the correct length for example 2', () => {
        const nums = [0, 3, 2, 5, 4, 6, 1, 1];
        expect(longestConsecutive(nums)).toBe(7); // Sequence: [0, 1, 2, 3, 4, 5, 6]
    });

    it('should handle an empty array', () => {
        const nums: number[] = [];
        expect(longestConsecutive(nums)).toBe(0);
    });

    it('should handle an array with a single element', () => {
        const nums = [1];
        expect(longestConsecutive(nums)).toBe(1);
    });

    it('should handle an array with no consecutive elements', () => {
        const nums = [1, 3, 5, 7, 9];
        expect(longestConsecutive(nums)).toBe(1);
    });

    it('should handle an array with all consecutive elements', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(longestConsecutive(nums)).toBe(5);
    });

    it('should handle duplicate numbers correctly', () => {
        const nums = [1, 2, 0, 1];
        expect(longestConsecutive(nums)).toBe(3); // Sequence: [0, 1, 2]
    });

    it('should handle negative numbers', () => {
        const nums = [-1, 0, 1, -2, -3];
        expect(longestConsecutive(nums)).toBe(5); // Sequence: [-3, -2, -1, 0, 1]
    });

    it('should handle large numbers', () => {
        const nums = [100, 4, 200, 1, 3, 2];
        expect(longestConsecutive(nums)).toBe(4); // Sequence: [1, 2, 3, 4]
    });

    it('should handle a complex case with multiple sequences', () => {
        const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
        expect(longestConsecutive(nums)).toBe(7); // Sequence: [-1, 0, 1, 3, 4, 5, 6, 7, 8, 9]
        // The sequence is -1, 0, 1, 3, 4, 5, 6, 7, 8, 9.
        // The longest consecutive sequence is [-1, 0, 1] (length 3) and [3, 4, 5, 6, 7, 8, 9] (length 7).
        // The problem states "each element is exactly 1 greater than the previous element".
        // So, [3,4,5,6,7,8,9] is 7.
    });
});
