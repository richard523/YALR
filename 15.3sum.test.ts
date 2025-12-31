import { threeSum } from './15.3sum';

describe('threeSum', () => {
    it('should return the correct triplets for example 1', () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        const expected = [
            [-1, -1, 2],
            [-1, 0, 1]
        ];
        const result = threeSum(nums);
        // Sort inner arrays and then the outer array for consistent comparison
        const sortedResult = result.map(arr => arr.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
        const sortedExpected = expected.map(arr => arr.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
        expect(sortedResult).toEqual(sortedExpected);
    });

    it('should return an empty array for example 2 (no solution)', () => {
        const nums = [0, 1, 1];
        const expected: number[][] = [];
        expect(threeSum(nums)).toEqual(expected);
    });

    it('should return the correct triplet for example 3 (all zeros)', () => {
        const nums = [0, 0, 0];
        const expected = [
            [0, 0, 0]
        ];
        expect(threeSum(nums)).toEqual(expected);
    });

    it('should handle an array with no triplets summing to zero', () => {
        const nums = [1, 2, 3, 4, 5];
        const expected: number[][] = [];
        expect(threeSum(nums)).toEqual(expected);
    });

    it('should handle an array with negative numbers only', () => {
        const nums = [-5, -4, -3, -2, -1];
        const expected: number[][] = [];
        expect(threeSum(nums)).toEqual(expected);
    });

    it('should handle an array with mixed numbers and duplicates', () => {
        const nums = [-2, 0, 0, 2, 2];
        const expected = [
            [-2, 0, 2]
        ];
        const result = threeSum(nums);
        const sortedResult = result.map(arr => arr.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
        const sortedExpected = expected.map(arr => arr.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
        expect(sortedResult).toEqual(sortedExpected);
    });

    it('should handle a larger array with multiple solutions', () => {
        const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
        const expected = [
            [-4, -2, 6],
            [-4, 0, 4],
            [-4, 1, 3],
            [-4, 2, 2], // Added this triplet
            [-2, -2, 4],
            [-2, 0, 2]
        ];
        const result = threeSum(nums);
        const sortedResult = result.map(arr => arr.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
        const sortedExpected = expected.map(arr => arr.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
        expect(sortedResult).toEqual(sortedExpected);
    });

    it('should handle an array with all same numbers (non-zero)', () => {
        const nums = [1, 1, 1];
        const expected: number[][] = [];
        expect(threeSum(nums)).toEqual(expected);
    });

    it('should handle an array with minimum length (3)', () => {
        const nums = [-1, 0, 1];
        const expected = [
            [-1, 0, 1]
        ];
        expect(threeSum(nums)).toEqual(expected);
    });
});
