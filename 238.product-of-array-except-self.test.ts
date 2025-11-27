import { productExceptSelf } from './238.product-of-array-except-self';

describe('productExceptSelf', () => {
    it('should return the correct products for example 1', () => {
        const nums = [1, 2, 4, 6];
        const expected = [48, 24, 12, 8];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    it('should return the correct products for example 2', () => {
        const nums = [-1, 0, 1, 2, 3];
        const expected = [0, -6, 0, 0, 0];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    it('should handle all positive numbers', () => {
        const nums = [1, 2, 3, 4];
        const expected = [24, 12, 8, 6];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    it('should handle negative numbers', () => {
        const nums = [-1, -2, -3, -4];
        const expected = [-24, -12, -8, -6];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    it('should handle a single zero', () => {
        const nums = [1, 2, 0, 4];
        const expected = [0, 0, 8, 0];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    it('should handle multiple zeros', () => {
        const nums = [1, 0, 2, 0, 3];
        const expected = [0, 0, 0, 0, 0];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    it('should handle array with two elements', () => {
        const nums = [5, 10];
        const expected = [10, 5];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    it('should handle array with all ones', () => {
        const nums = [1, 1, 1, 1];
        const expected = [1, 1, 1, 1];
        expect(productExceptSelf(nums)).toEqual(expected);
    });
});
