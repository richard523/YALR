import { containsDuplicate } from './217.contains-duplicate';

describe('containsDuplicate', () => {
    it('should return true for an array with duplicates', () => {
        const nums = [1, 2, 3, 3];
        expect(containsDuplicate(nums)).toBe(true);
    });

    it('should return false for an array with no duplicates', () => {
        const nums = [1, 2, 3, 4];
        expect(containsDuplicate(nums)).toBe(false);
    });

    it('should return true for an array with multiple duplicates', () => {
        const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
        expect(containsDuplicate(nums)).toBe(true);
    });

    it('should return false for an empty array', () => {
        const nums: number[] = [];
        expect(containsDuplicate(nums)).toBe(false);
    });

    it('should return false for an array with a single element', () => {
        const nums = [1];
        expect(containsDuplicate(nums)).toBe(false);
    });
});
