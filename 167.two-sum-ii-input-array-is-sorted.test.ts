import { twoSum } from './167.two-sum-ii-input-array-is-sorted';

describe('twoSum', () => {
    it('should return the correct 1-indexed indices for example 1', () => {
        const numbers = [1, 2, 3, 4];
        const target = 3;
        expect(twoSum(numbers, target)).toEqual([1, 2]);
    });

    it('should return the correct 1-indexed indices for a different example', () => {
        const numbers = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(numbers, target)).toEqual([1, 2]); // 2 + 7 = 9
    });

    it('should handle negative numbers', () => {
        const numbers = [-3, -1, 0, 2, 5];
        const target = 2;
        expect(twoSum(numbers, target)).toEqual([1, 5]); // -3 + 5 = 2
    });

    it('should handle target as zero', () => {
        const numbers = [-5, -2, 0, 2, 5];
        const target = 0;
        expect(twoSum(numbers, target)).toEqual([1, 5]); // -5 + 5 = 0
    });

    it('should handle larger numbers', () => {
        const numbers = [10, 20, 30, 40, 50];
        const target = 70;
        expect(twoSum(numbers, target)).toEqual([2, 5]); // 20 + 50 = 70
    });

    it('should handle array with two elements', () => {
        const numbers = [1, 2];
        const target = 3;
        expect(twoSum(numbers, target)).toEqual([1, 2]);
    });

    it('should handle target with numbers at the ends of the array', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7];
        const target = 8;
        expect(twoSum(numbers, target)).toEqual([1, 7]); // 1 + 7 = 8
    });

    it('should handle target with numbers in the middle of the array', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7];
        const target = 9;
        expect(twoSum(numbers, target)).toEqual([2, 7]); // 2 + 7 = 9
    });
});
