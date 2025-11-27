import { twoSum } from './1.two-sum';

describe('twoSum', () => {
    it('should return the correct indices for example 1', () => {
        const nums = [3, 4, 5, 6];
        const target = 7;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    it('should return the correct indices for example 2', () => {
        const nums = [4, 5, 6];
        const target = 10;
        expect(twoSum(nums, target)).toEqual([0, 2]);
    });

    it('should return the correct indices for example 3', () => {
        const nums = [5, 5];
        const target = 10;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    it('should handle negative numbers', () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        expect(twoSum(nums, target)).toEqual([2, 4]); // -3 + -5 = -8
    });

    it('should handle zero', () => {
        const nums = [0, 4, 3, 0];
        const target = 0;
        expect(twoSum(nums, target)).toEqual([0, 3]); // 0 + 0 = 0
    });

    it('should handle larger numbers', () => {
        const nums = [100, 200, 300, 400];
        const target = 700;
        expect(twoSum(nums, target)).toEqual([2, 3]); // 300 + 400 = 700
    });

    it('should return the smaller index first', () => {
        const nums = [3, 2, 4];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([1, 2]); // 2 + 4 = 6
    });
});
